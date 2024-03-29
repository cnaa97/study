window.onload = function(){

    function defineData(){
        window.base = {};
    }

    function createSVG(){
        return d3.select(document.body)
                .append('svg')
    }

    function setBaseValue(object){
        base.trbl = {top:50, right:50, left:50 ,bottom:50};
        base.svgWidth = parseInt(object.style('width'));
        base.svgHeight = parseInt(object.style('height'));
      	base.graphWidth = base.svgWidth - base.trbl.left - base.trbl.right;
        base.graphHeight = base.svgHeight - base.trbl.top - base.trbl.bottom;
    }

    function showColor(object){
        var rgbColor = d3.interpolateRgb('yellow','blue');
        base.data = [];
        // 0.1씩 증가하면서 보간 함수를 호출하여 컬러값을 구한다.

        let k = 0;
        while (k < 1){
            base.data.push(rgbColor(k));
            k += 0.1;
        }

        var obj = object.append('g').selectAll('rect').data(base.data).enter();

        // 사각형으로 컬러 표시
        obj.append('rect')
			.attr('x',function(data,idx){
				return idx * 70;
			})
			.attr('y', base.trbl.top)
			.attr('width',70)
			.attr('height',50)
			.style('fill', function(data,idx){
                var rgb = d3.rgb(data);
                console.log(rgb);
				return `rgb(${rgb.r},${rgb.g},${rgb.b})`;
			});
            
        obj.append('g')
			.append('text')
            .attr('y',base.trbl.top*3)
			.text(base.data.join(','));
	}

    ////////////////////////// 함수 실행

    defineData();
    var object = createSVG();
    setBaseValue(object);
    showColor(object);

}
