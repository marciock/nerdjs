"use strict";

class Matrix extends HTMLElement{

	appendText(text,element){
		element.textContent=text;
	}

}


class MdlInit extends HTMLElement{
	constructor(){
		super();
	//	const shadow=this.attachShadow({mode:'open'});

		const tagStyle=`
			<style>
				@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
				@import url("mdl/material.min.css");


			</style>
		`;

		const tagScript=`
			<script refer src="mdl/material.min.js"></script>

		`;
		this.innerHTML=tagStyle;
		this.innerHTML+=tagScript;

	}
}

customElements.define('mdl-init',MdlInit);

class FabRiple extends HTMLElement{
	constructor(){
		super();

	//	const shadow=this.attachShadow({mode:'open'});


		const btn=document.createElement('button');
		const myIcon=document.createElement('i');
		const nameIcon=this.getAttribute('icon');

		btn.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--fab', 'mdl-button--colored');

		myIcon.classList.add('material-icons');
		myIcon.innerHTML=nameIcon;

		btn.appendChild(myIcon);


		this.appendChild(btn);

	}
}
customElements.define('fab-riple',FabRiple);

class FabButton extends HTMLElement{
	constructor(){
		super();
		//const shadow=this.attachShadow({mode:'open'});

		const btn=document.createElement('button');
		const icon=document.createElement('i');
		const nameIcon=this.getAttribute('icon');

		btn.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--fab', 'mdl-js-ripple-effect','mdl-button--colored');

		icon.classList.add('material-icons');
		icon.innerHTML=nameIcon;

		btn.appendChild(icon);


		this.appendChild(btn);

	}
}
customElements.define('fab-button',FabButton);

class RaisedButton extends HTMLElement{
	constructor(){
		super();


	//		const shadow=this.attachShadow({mode:'open'});
		const btn=document.createElement('BUTTON');
		const colored=this.getAttribute('colored');
		if (colored) {
			btn.classList.add('mdl-button--colored');
		}
		btn.classList.add('mdl-button','mdl-js-button','mdl-button--raised');

		const text=this.textContent;
		const icon=this.innerHTML;
		btn.textContent=text;

		this.textContent=null;


		this.appendChild(btn);
	}

}
customElements.define('raised-button',RaisedButton);

class IconButton extends HTMLElement{
	constructor(){
		super();


	//		const shadow=this.attachShadow({mode:'open'});
		const btn=document.createElement('BUTTON');
		const colored=this.getAttribute('colored');
		if (colored) {
			btn.classList.add('mdl-button--colored');
		}
		btn.classList.add('mdl-button','mdl-js-button','mdl-button--icon');

		//const text=this.textContent;
		const icon=this.innerHTML;
		console.log(icon);
		btn.innerHTML=icon;

		this.textContent=null;


		this.appendChild(btn);
	}

}
customElements.define('icon-button',IconButton);

class FlatButton extends HTMLElement{
	constructor(){
		super();


	//		const shadow=this.attachShadow({mode:'open'});
		const btn=document.createElement('BUTTON');
		const colored=this.getAttribute('colored');
		if (colored) {
			btn.classList.add('mdl-button--colored');
		}
		btn.classList.add('mdl-button','mdl-js-button','mdl-js-ripple-effect');

		const text=this.textContent;

		this.textContent=text;
		this.textContent=null;


		this.appendChild(btn);
	}

}
customElements.define('flat-button',FlatButton);

class IconBadge extends HTMLElement{
	constructor(){
		super();

		const div=document.createElement('div');
		div.classList.add('material-icons','mdl-badge','mdl-badge--overlap');
		const data=this.getAttribute('data-badge');
		div.setAttribute('data-badge',data);
		const text=this.innerHTML;
			console.log(text);
		this.innerHTML=text;
		this.textContent=null;
		this.appendChild(div);
	}
}
customElements.define('icon-badge',IconBadge)


class TextBadge extends HTMLElement{
	constructor(){
		super();

		const div=document.createElement('span');
		div.classList.add('mdl-badge');
		const data=this.getAttribute('data-badge');
		div.setAttribute('data-badge',data);
		const text=this.innerHTML;
			console.log(text);
		this.innerHTML=text;
		this.textContent=null;
		this.appendChild(div);
	}
}
customElements.define('text-badge',TextBadge);

class CardWide extends HTMLElement{
	constructor(){
		super();

		// settings attributes
			const myId=this.getAttribute('id');
			const myWidth=this.getAttribute('width');
			const myHeight=this.getAttribute('height');
			const colorTitle=this.getAttribute('color-title');
			const colorText=this.getAttribute('color-text');
			const myImg=this.getAttribute('img');
			const text=this.getAttribute('text');
			const title=this.getAttribute('title');
			const textLink=this.getAttribute('text-link');
			const attrIcon=this.getAttribute('icon');


			// somes attributes sets into style
		const myStyle=`<style>
			.demo-card-wide.mdl-card {
				width: ${myWidth};}
				.demo-card-wide > .mdl-card__title {color: ${colorTitle};
				height: ${myHeight};
				background: url('localhost/nerdjs/assets/img/telefone.jpg') center / cover;}
				.demo-card-wide > .mdl-card__menu {	color: ${colorText};}
				</style>`;


			//settings elements
			const divWide=document.createElement('div');
			const divCardTitle=document.createElement('div');
			const cardTitleText=document.createElement('h2');
			const divSupportingText=document.createElement('div');
			const divCardActions=document.createElement('div');
			const linkBtn=document.createElement('a');
			const divCardMenu=document.createElement('div');
			const btnMenu=document.createElement('BUTTON');
			const myIcon=document.createElement('i');


			// styling css elements created

			divWide.classList.add('demo-card-wide', 'mdl-card','mdl-shadow--2dp');
			divCardTitle.classList.add('mdl-card__title');
			cardTitleText.classList.add('mdl-card__title-text');
			divSupportingText.classList.add('mdl-card__supporting-text');
			divCardActions.classList.add('mdl-card__actions' ,'mdl-card--border');
			linkBtn.classList.add('mdl-button' ,'mdl-button--colored', 'mdl-js-button', 'mdl-js-ripple-effect');
			divCardMenu.classList.add('mdl-card__menu');
			btnMenu.classList.add('mdl-button', 'mdl-button--icon', 'mdl-js-button', 'mdl-js-ripple-effect');
			myIcon.classList.add('material-icons');

			//some attributes so into style elements

			divWide.id=myId;
			cardTitleText.innerHTML=title;
			divSupportingText.innerHTML=text;
			linkBtn.innerHTML=textLink;
			myIcon.innerHTML=attrIcon;

			//appending elements
			divCardTitle.appendChild(cardTitleText);
			divWide.appendChild(divCardTitle);
			divWide.appendChild(divSupportingText);
			divCardActions.appendChild(linkBtn);
			divWide.appendChild(divCardActions);
			btnMenu.appendChild(myIcon);
			divCardMenu.appendChild(btnMenu);

			//appending divWide into root component
			//this.innerHTML=myStyle;
			this.appendChild(divWide);

	}
	get pushStyles(){


	}

	get pushBind(){

	}
	get props(){

	}
}
customElements.define('card-wide',CardWide);
