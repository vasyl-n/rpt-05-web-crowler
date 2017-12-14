
const spider = ( url, visited={}, num=increment() ) => {
  if( visited[url] === undefined ){
    console.log(url)
    $.get(url, (data) => {
      let links = getLinks(data);
      visited[url] = "visited";
      debugger
      links.forEach( (link, index) => {
        let sp = spider.bind(null, ...[link, visited, num]);
        setTimeout( sp, 200 * num() );
      });
    });
  }
}

// window.location = "http://www.goducks.com"



var increment = () => {
    var count = 1;
    return () => {
      return count++;
    }
  }

// const spider = ( url ) => {
//   let links = [url];
//   let visited = {};
//   // debugger
//   let num = increment();

//   let recurse = (link) => {
//       $.get(link, (data) => {
//       console.log(link)
//       links += getLinks(data);
//       visited[link] = "visited";
//     });
//   }
//   let fun = recurse.bind(null, links[num()])
//   fun.apply(null, )
//   setInterval(function(){return recurse.bind(null, links[num()])}, 1000)
// }



// timeout and if are not working

const getLinks = html => {
  html = html.split('href="');
  return html
    .map( item => item.slice(0, item.indexOf('"')))
    .filter( item => item.indexOf('http') === 0)
}


spider('http://www.goducks.com')



