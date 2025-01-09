import React, { useState } from 'react'

const QrGen = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false); // Changed to lowercase
    const [qrData, setData] = useState("");
    const [size, setSize] = useState(150);

    async function generateQr() {
        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`; // Fixed template literal
            setImg(url);
        } catch (error) {
            console.log("error : ", error);
        } finally {
            setLoading(false);
        }
    }

    function downloadQr(){
        fetch(img)
        .then((response)=> response.blob())
        .then((blob)=>{
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qr-code.png";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }


    return (
        <div className='main-container'>
            <h1>QR Generator</h1>
            {loading && <p>Loading...</p>}
            {img && <img src={img} alt="Generated QR Code" />}
            <label htmlFor="qrData">Data For QR Code:</label>
            <input
                type="text"
                name="qrData"
                placeholder="www.mywebsite.com"
                value={qrData}
                onChange={(e) => setData(e.target.value)}
            />
            <label htmlFor="size">Image Size:</label>
            <input
                type="number"
                placeholder="ex : 300"
                value={size}
                onChange={(e) => setSize(e.target.value)}
            />
            <button className="button generate" disabled={loading} onClick={generateQr}>Generate QR Code</button>
            <button className="button download" onClick={downloadQr}>Download QR code</button>
            <p>Designed By <a href="https://github.com/gowtham-ggg">Gowtham G</a></p>
        </div>
    )
}

export default QrGen
