import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const apiKey = process.env.GEMINI_API_KEY || process.argv[2];

if (!apiKey) {
  console.error('Error: GEMINI_API_KEY is not provided.');
  console.error('Usage: node scripts/generate-remaining-images.mjs <YOUR_GEMINI_API_KEY>');
  console.error('Or set GEMINI_API_KEY in your environment.');
  console.error('You can get a free API key at: https://aistudio.google.com/app/apikey');
  process.exit(1);
}

const REMAINING_IMAGES = [
  {
    target: 'public/images/workforce/zuzu-comparisons-evaluation.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic enterprise software evaluation banner. On the right side, two professional Indian software analysts (man and woman) analyze platform feature benchmark matrices on a tablet. The left two-thirds features a modern glass corporate boardroom with soft ambient light and clean negative space. Professional tech documentary photography.'
  },
  {
    target: 'public/images/workforce/zuzu-developer-focused.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic software development deep work banner. On the right side, a focused Indian software engineer wearing over-ear noise-canceling headphones is deeply engaged in coding at a dual-monitor workstation. The left two-thirds features a clean, contemporary tech office with natural window daylight and open negative space.'
  },
  {
    target: 'public/images/workforce/zuzu-home-hero.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic enterprise workforce banner. On the right side, a collaborative team of Indian technology executives and engineers discuss strategy in a modern high-rise headquarters. The left two-thirds features expansive floor-to-ceiling glass windows overlooking a city skyline with clean negative space for headline text.'
  },
  {
    target: 'public/images/workforce/zuzu-hybrid-workforce.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic hybrid workforce banner. On the right side, an Indian hybrid team collaborates in a contemporary lounge area while seamlessly communicating with remote colleagues via a wall-mounted video conferencing screen. The left two-thirds provides clean open negative space with bright daylight. Authentic modern workplace photography.'
  },
  {
    target: 'public/images/workforce/zuzu-installation-setup.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic enterprise desktop software setup banner. On the right side, an Indian IT systems administrator configures lightweight background agent deployment on a modern Windows workstation. The left two-thirds features a clean, bright tech office environment with ample negative space for text.'
  },
  {
    target: 'public/images/workforce/zuzu-manager-one-on-one.jpg',
    aspectRatio: '3:2',
    prompt: 'A candid photorealistic business photograph. An empathetic Indian engineering manager conducts a supportive 1-on-1 performance review discussion with a team member across a small wooden meeting table in a bright, modern office with soft daylight and authentic expressions.'
  },
  {
    target: 'public/images/workforce/zuzu-manager-review.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic management operations banner. On the right side, an Indian engineering team manager reviews sprint progress, team velocity, and workload distribution on a laptop at a modern desk. The left two-thirds features clean open architectural space with natural daylight and negative space.'
  },
  {
    target: 'public/images/workforce/zuzu-onboarding-setup.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic corporate onboarding banner. On the right side, a friendly Indian IT onboarding specialist assists a new employee with workstation activation and setup. The left two-thirds features a bright, clean contemporary enterprise workspace with open negative space.'
  },
  {
    target: 'public/images/workforce/zuzu-platform-architect.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic platform architecture banner. On the right side, a senior Indian platform architect examines enterprise system architecture schematics on a laptop at a high-rise standing desk. The left two-thirds features panoramic office windows and clean negative space.'
  },
  {
    target: 'public/images/workforce/zuzu-remote-workforce.jpg',
    aspectRatio: '3:2',
    prompt: 'A photorealistic lifestyle photograph of a professional Indian remote software engineer working focused on a laptop in an ergonomic, sunlit modern home office with indoor plants and warm wooden shelving.'
  },
  {
    target: 'public/images/workforce/zuzu-reports-executive.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic executive reporting banner. On the right side, a senior Indian operations director reviews automated executive workforce summary reports on a modern laptop. The left two-thirds features an elegant executive suite with soft ambient lighting and empty negative space.'
  },
  {
    target: 'public/images/workforce/zuzu-security-audit.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic cybersecurity compliance banner. On the right side, a professional Indian cybersecurity auditor evaluates enterprise security audit logs on a high-resolution display. The left two-thirds features sleek modern corporate architecture with empty negative space.'
  },
  {
    target: 'public/images/workforce/zuzu-security-privacy.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic data privacy banner. On the right side, a professional Indian privacy and compliance officer evaluates on-device screenshot redaction and data protection policies at an office workstation. The left two-thirds features clean modern architectural glass with ample negative space.'
  },
  {
    target: 'public/images/workforce/zuzu-team-collaboration.jpg',
    aspectRatio: '16:9',
    prompt: 'A photorealistic company culture banner. On the right side, a vibrant group of Indian tech professionals collaborate around a project whiteboard in a bright creative studio. The left two-thirds features an open, sunlit workspace with warm wooden accents and negative space for text.'
  },
  {
    target: 'public/images/workforce/zuzu-workforce-monitoring.jpg',
    aspectRatio: '3:2',
    prompt: 'A photorealistic photograph of an Indian desktop systems engineer monitoring telemetry health and system performance metrics across dual monitors in a contemporary tech operations center.'
  },
  {
    target: 'public/images/workforce/zuzu-workplace-employee.jpg',
    aspectRatio: '3:2',
    prompt: 'A photorealistic photograph of a professional Indian employee working focused and comfortably at an ergonomic workstation in a modern corporate office with natural daylight.'
  }
];

async function generateWithImagen(item, index, total) {
  console.log(`[${index + 1}/${total}] Generating: ${item.target} (${item.aspectRatio})...`);
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;

  const payload = {
    instances: [
      { prompt: item.prompt }
    ],
    parameters: {
      sampleCount: 1,
      aspectRatio: item.aspectRatio === '3:2' ? '3:4' : (item.aspectRatio === '16:9' ? '16:9' : '1:1'),
      outputMimeType: 'image/jpeg',
      personGeneration: 'ALLOW_ADULT'
    }
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`API returned HTTP ${response.status}: ${errorBody}`);
  }

  const result = await response.json();
  if (!result.predictions || !result.predictions[0] || !result.predictions[0].bytesBase64Encoded) {
    throw new Error(`No image data in response: ${JSON.stringify(result)}`);
  }

  const base64Data = result.predictions[0].bytesBase64Encoded;
  const buffer = Buffer.from(base64Data, 'base64');
  const targetPath = path.resolve(rootDir, item.target);

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, buffer);
  console.log(`  -> Saved ${item.target} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

async function main() {
  console.log(`Starting generation of ${REMAINING_IMAGES.length} remaining images with Google Imagen 3...`);
  let success = 0;
  for (let i = 0; i < REMAINING_IMAGES.length; i++) {
    try {
      await generateWithImagen(REMAINING_IMAGES[i], i, REMAINING_IMAGES.length);
      success++;
      // Polite 2-second rate-limit buffer
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (err) {
      console.error(`  [FAILED] ${REMAINING_IMAGES[i].target}:`, err.message);
    }
  }
  console.log(`Finished: ${success}/${REMAINING_IMAGES.length} images generated and saved.`);
}

main();
