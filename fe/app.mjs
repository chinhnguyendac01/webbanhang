import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
 
const files = await imagemin(['src/assets/images/hp-banner-slider/*.{jpg,png}'], {
    destination: 'src/assets/build/images/hp-banner-slider',
    plugins: [
        imageminMozjpeg({quality: 50}),
        imageminPngquant({
            quality: [0.6, 0.8]
        }),
    ]
     
});
 
console.log(files);
