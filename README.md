# Specialized Plastic Surgery

Next.js, TypeScript, Tailwind CSS v4
Deployed on Vercel: https://specializedps.vercel.app
Production: https://specializedplasticsurgery.com
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/specializedps/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/specializedps/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/specializedps/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/specializedps/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
