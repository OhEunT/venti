//소셜 효과
let effect = document.getElementById('turbulence');
anim = new TimelineMax({ paused: true });
anim.staggerFrom(
	'.pic',
	3,
	{
		opacity: 0,
		x: -100,
		y: -120,
		ease: Power4.easeOut,
	},
	0.6
);

anim.to(
	effect,
	4,
	{
		attr: { baseFrequency: '0 0' },
	},
	3
);

// anim.play();
window.addEventListener('scroll', () => {
	const social = document.getElementById('social');
	const socialPosition = social.getBoundingClientRect().top; // social의 현재 위치
	const windowHeight = window.innerHeight; // 현재 뷰포트 높이

	// if (socialPosition < windowHeight && !anim.isActive()) {
	// 	anim.play(); // 애니메이션 실행
	// }
	if (socialPosition < windowHeight - 200 && !anim.isActive()) {
		anim.play(); // 애니메이션 실행
	}
});
