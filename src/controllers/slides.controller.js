    const SlideService = require('../services/slides.service');

    class SlideController{
        async created(req, res){
            try {
                // console.log(req.body.img);
                
                // const {img} = req.body
                const new_slide = await SlideService.createdSlide(req.body.img);
                // console.log(img);
                
                return res.status(201).json({message: 'Tạo thành công!!', new_slide});
            } catch (error) {
                console.log(error);
                return res.status(500).json({message: error.message});
            }
        };

        async getSlide(req, res){
            try {
                const slides = await SlideService.getSlide();
                return res.status(200).json({message: 'Lấy thành công!', img: slides});
            } catch (error) {
                console.error(error);
                return res.status(500).json({message: error.message});
            }
        }

    }

    module.exports = new SlideController();