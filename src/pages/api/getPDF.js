// pages/api/generate-pdf.js

import pdf from "html-pdf";

export default async function handler(
  req,res
) {
  const { html } = req.body;

  pdf.create(html).toStream((err, stream) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.setHeader("Content-Type", "application/pdf");
    stream.pipe(res);
  });
}
