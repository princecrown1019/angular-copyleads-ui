import HtmlDocx from 'html-docx-js';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.post((req, res) => {
    const { html } = req.body;
    const converted = HtmlDocx.asBlob(html);
    res.setHeader('Content-Disposition', 'attachment; filename=exported-file.docx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.send(converted);
});

export default handler;
