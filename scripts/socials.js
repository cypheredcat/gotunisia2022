function instagram() {
	swal({text: "Our Instagram Page isn't availble yet.",dangerMode: true});
}

function whatsapp() {
	swal({title: "WhatsApp", text: "[ GO TUNISIA ]: +90 552 509 43 17.\n[ Tunisia Master Dealer ]: +216 53 494 982.", buttons: ["Close","Send A Message"],dangerMode: true,}).then((tryagain) => {if (tryagain) {textwhatsapp();}});
}

function facebook() {
	swal({text: "Our Facebook Page isn't availble yet.",dangerMode: true});
}

function twitter() {
	swal({text: "Our Twitter Account isn't availble yet.",dangerMode: true});
}

function mobilewhatsapp() {
	url = 'https://wa.me/905525094317';
	window.open(url, '_blank');
	swal({text: "Redirected you to WhatsApp.",icon: "success",dangerMode: true});
}

function textwhatsapp() {
	swal({
		content: "input",
		title: "Message",
		button: "Send",
		dangerMode: true,
	}).then(message => {
		let url = 'https://wa.me/905525094317?text='+message;
		window.open(url, '_blank');
		swal({title: "Message Sent",icon: "success",dangerMode: true,});
	})
}