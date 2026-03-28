import fs from 'fs';
import path  from 'path';
import  {marked} from 'marked';

const mdContent= fs.readFileSync('./docs/getting-started.md', 'utf8');
const htmlContent= await marked.parse(mdContent);

const fullPage= `
<!Doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Getting Started — AmurotOpenSource</title>
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
<main class="container" style="padding: 2rem 1.5rem;">
    <div class="markdown-body">
      ${htmlContent}
    </div>
  </main>
</body>
</html>
`
fs.writeFileSync('./docs/getting-started.html',fullPage);
console.log("Docs rendered successfully!");