import {createWriteStream} from "fs";

export default {
    uploadFile: async (parent, {file}) => {
        try {
            if (!file) throw new Error("No file provided");

            const { filename, minetype, encoding, createReadStream } = await file;

            const stream = createReadStream();
            const path = `./uploads/${filename}`;

            const writeStream = createWriteStream(path);
            await new Promise((resolve, reject) => {
                stream
                        .pipe(writeStream)
                        .on('finish', resolve)
                        .on('error', reject);
            });
            return { filename, minetype, encoding };
        } catch (error) {
            return error;
        }
    }
}