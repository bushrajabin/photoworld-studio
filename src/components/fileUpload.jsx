import { useState } from "react"

const fileUpload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    const handleUploadImage = async () => {
        try {
            if (!image) {
                return alert("please select any image");

            }

            const imageData = new FormData();
            imageData.append('file', image);
            imageData.append('upload_present', 'photoworld-studio');
            imageData.append("Cloud_name", "djxx3xc6p")
            const { data } = await axios.post("https:api.cloudinary.com/v1_1/djxx3xc6p/image/upload")
        } catch (error) {
            console.log(error);
        }
    }
}