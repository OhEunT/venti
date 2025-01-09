const brand = document.getElementById('brand');
const vidList = brand.querySelector('.wrap');
const key = 'AIzaSyD62N3ObfAdS9fO3LIOtg5NYyfqE7sWmq4';
const playlistId = 'PLR22mOC3bZYpng6ZvOF7_CGgODi-HDiYP';
const num = 4;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

fetch(url)
	.then((data) => {
		return data.json();
	})
	.then((json) => {
		let items = json.items;
		vidList.innerHTML = `
                    <article>
						<i class="fas fa-barcode"></i>
						<h2>VENTI YOUTUBE</h2>
						<p>큐알코드로 이동할 수 있습니다.</p>
						<a href="#">Go youtube</a>
					</article>
        `;
		items.map((item) => {
			let title = item.snippet.title;
			let thumbnail = item.snippet.thumbnails.medium.url;
			if (title.length > 30) {
				title = title.substr(0, 30) + '...';
			}
			vidList.innerHTML += `
            <article>
						<img
							src="${thumbnail}"
							alt="${title}"
						/>
						<p>${title}</p>
					</article>
            `;
		});
	});

// 	result += `<article>
//     <a href="${item.snippet.resourceId.videoId}" class="pic">
//         <img src="${item.snippet.thumbnails.medium.url}">
//     </a>
//     <div class="con">
//         <h2>${title}</h2>
//         <p>${con}</p>
//         <span>${date}</span>
//     </div>
// </article>`;
