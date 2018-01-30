app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        // 创建一辆卡车
        var obj = app.create({
            type: 'Thing',
            name: 'truck',
            url: 'https://speech.uinnova.com/static/models/truck/',
            position: [0, 0, 0],
            complete: function () {
                // 通过点击车来更改纹理
                var imageName = obj.style.images[0].src;
                obj.on('click', function(){
                    if (obj.style.images[0].src === imageName) {
                        obj.style.images[0].src = 'https://speech.uinnova.com/static/models/forklift/textures/DEA_PC_VEH_FOR_B_diffuse.png';
                    } else {
                        obj.style.images[0].src = imageName;
                   }
                });
            }
        });					
    }
});