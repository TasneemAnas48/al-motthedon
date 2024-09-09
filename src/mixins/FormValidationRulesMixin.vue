<script>
export default {
    data() {
        return {
            noRule: (v) => true,
            requiredRule: (v) =>
                (v != null && v != undefined && String(v).length > 0) ||
                "This field is required.",
            nameRule: (v) =>
                !(v && v.length < 5) ||
                "Name field should contain at least 5 characters.",
            confirmPasswordRule(password) {
                return (v) =>
                    !(v && v != password) || "Password fields are not identical.";
            },
            passwordRule: (v) =>
                !(v && v.length < 8) ||
                "Password field should contain at least 8 characters.",
            emailRule: (v) =>
                !v ||
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Please enter valid Email.",
            phoneNumberRule: (v) =>
                !v ||
                /^([0-9]\d*\d{7,})$/.test(v) ||
                "Phone number should contain only numbers and should contain at least 7 numbers.",
            notEmptyRule: (v) =>
                v.length != 0 || "Field should at least contain one item.",
            numberOrNullRule: (v) =>
                Number.isInteger(Number(v)) || !v || "This field should be a number.",
            numberRule: (v) =>
                Number.isInteger(Number(v)) || "This field should be a number.",
            // urlRule: (v) => 
            
            // ,
            allowedImagesFormats: [
                "image/jpeg",
                "image/jpg",
                "image/png",
                "image/webp",
                "image/bmp",
            ],
            allowedVideosFormats: [
                "video/mp4",
                "video/x-msvideo",
                "video/mpeg",
                "video/ogg",
                "video/webm",
                "video/3gpp",
                "video/3gpp2",
            ],
            imageRule: (v) => !v || this.allowedImagesFormats.includes(v?.type) || "This file should be an image.",
            imageArrayRule: (array) => {
                var allImages = true;
                array.map((image) => {
                    if (!this.allowedImagesFormats.includes(image.type)) {
                        allImages = false;
                    }
                });
                return allImages || "All files should be image files.";
            },
            videoRule: (v) =>
                this.allowedVideosFormats.includes(v?.type) ||
                "This file should be a video.",
            videoArrayRule: (array) => {
                var allVideos = true;
                array.map((video) => {
                    if (!this.allowedVideosFormats.includes(video.type)) {
                        allVideos = false;
                    }
                });
                return allVideos || "All files should be video files.";
            },
        };
    },
};
</script>

<!-- v => (v && v.length <= 100) || this.$i18n.translate('validation.lt.string', {
'attribute': '', 'value': 100 }) -->
