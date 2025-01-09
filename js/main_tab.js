//tab menu

document.querySelectorAll('#title ul li').forEach(function (li, liIndex) {
	li.addEventListener('click', function () {
		// 모든 li에서 active 클래스 제거
		document.querySelectorAll('#title ul li').forEach(function (el) {
			el.classList.remove('active');
		});

		// 클릭한 li에 active 클래스 추가
		this.classList.add('active');

		// 클릭한 li의 인덱스에 따라 섹션 활성화
		document
			.querySelectorAll('#coffee, #sidemenu, #dessert')
			.forEach(function (el) {
				el.classList.remove('active');
			});

		var targetId =
			liIndex === 0 ? 'coffee' : liIndex === 1 ? 'dessert' : 'sidemenu';
		document.getElementById(targetId).classList.add('active');
	});
});
