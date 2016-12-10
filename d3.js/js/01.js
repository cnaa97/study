window.onload = function(){

// 기본 SVG 도형 그리기

    d3.select(document.body)
    .append('svg')
    .attr('id','idsvg')
    .attr('width',150)
    .attr('height',100)
    .style({
        position:'absolute',
        top:'200px',
        left:'100px',
        border:'1px solid blue'
    })
    .append('rect') // 사각형 그리기
    .attr({x:10, y:10, width:100, height:50, stroke:"blue", fill:"lime", "stroke-width":"5", rx:5, ry:5})
    // d3.으로 시작하는 것은 select()로 시작되는 그룹을 만드는 것 wrapper method라고 생각하면 됨.
    
// select

    // JS의 selector
    var node = document.querySelector('em')
    console.log('node.nodeName : '+ node.nodeName);
    // node.nodeName : EM

    // d3 selector
    var d3node = d3.select('em');
    console.log("Array.isArray(d3node) : " + Array.isArray(d3node));
    // Array.isArray(d3node) : true 
    // Array type으로 반환된다.

    var el = d3node[0];
    el[0].nodeName
    console.log('el[0].nodeName : '+ el[0].nodeName);


}