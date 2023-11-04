import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export async function margepdfkit(images: string[]) {
    let doc = new jsPDF();
    for (let i = 0; i < images.length; i++) {
        let img = new Image();
        img.src = images[i];
        await html2canvas(img).then((canvas) => {
            let imgData = canvas.toDataURL('image/png');
            if (i > 0) {
                doc.addPage();
            }
            doc.addImage({
                imageData: imgData,
                x: 10,
                y: 10,
                width: doc.internal.pageSize.getWidth() - 20,
                height: doc.internal.pageSize.getHeight() - 20,
                format: 'PNG',
            });
        });
    }
    doc.save('output.pdf');
}
