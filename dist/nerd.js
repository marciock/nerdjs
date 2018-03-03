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
				@import url("mdl/material.indigo-pink.min.css");


			</style>
		`;

		const tagScript=`
			<script refer src="mdl/material.min.js"></script>

		`;
		this.innerHTML+=tagScript;
		this.innerHTML=tagStyle;
		

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
				background: url('${myImg}') center / cover;}
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
			this.innerHTML=myStyle;
			this.appendChild(divWide);

	}
}
customElements.define('card-wide',CardWide);

class CardSquare extends HTMLElement{
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
			.demo-card-square.mdl-card  {
				width: ${myWidth};}
				.demo-card-square > .mdl-card__title {color: ${colorTitle};
				height: ${myHeight};
				background: url('${myImg}') center / cover;}
				.demo-card-wide > .mdl-card__menu {	color: ${colorText};}
				</style>`;


			//settings elements
			const divSquare=document.createElement('div');
			const divCardTitle=document.createElement('div');
			const cardTitleText=document.createElement('h2');
			const divSupportingText=document.createElement('div');
			const divCardActions=document.createElement('div');
			const linkBtn=document.createElement('a');
			const divCardMenu=document.createElement('div');
			const btnMenu=document.createElement('BUTTON');
			const myIcon=document.createElement('i');


			// styling css elements created

			divSquare.classList.add('demo-card-square', 'mdl-card','mdl-shadow--2dp');
			divCardTitle.classList.add('mdl-card__title','mdl-card--expand');
			cardTitleText.classList.add('mdl-card__title-text');
			divSupportingText.classList.add('mdl-card__supporting-text');
			divCardActions.classList.add('mdl-card__actions' ,'mdl-card--border');
			linkBtn.classList.add('mdl-button' ,'mdl-button--colored', 'mdl-js-button', 'mdl-js-ripple-effect');
			divCardMenu.classList.add('mdl-card__menu');
			btnMenu.classList.add('mdl-button', 'mdl-button--icon', 'mdl-js-button', 'mdl-js-ripple-effect');
			myIcon.classList.add('material-icons');

			//some attributes so into style elements

			divSquare.id=myId;
			cardTitleText.innerHTML=title;
			divSupportingText.innerHTML=text;
			linkBtn.innerHTML=textLink;
			myIcon.innerHTML=attrIcon;

			//appending elements
			divCardTitle.appendChild(cardTitleText);
			divSquare.appendChild(divCardTitle);
			divSquare.appendChild(divSupportingText);
			divCardActions.appendChild(linkBtn);
			divSquare.appendChild(divCardActions);
			btnMenu.appendChild(myIcon);
			divCardMenu.appendChild(btnMenu);

			//appending divWide into root component
			//this.innerHTML=myStyle;
			this.innerHTML=myStyle;
			
			this.appendChild(divSquare);

	}
}
customElements.define('card-square',CardSquare);

class CardImage extends HTMLElement{
	constructor(){
		super();
		// settings attributes
		const myId=this.getAttribute('id');
		const img=this.getAttribute('img');
		const text=this.getAttribute('text');
		const title=this.getAttribute('title');
		const myWidth=this.getAttribute('width');
		const myHeight=this.getAttribute('height');
		//settings elements
		const cardImage=document.createElement('div');
		const cardTitle=document.createElement('div');
		const cardAction=document.createElement('div');
		const cardText=document.createElement('SPAN');
		
		// styling css elements created
		cardImage.classList.add('demo-card-image', 'mdl-card', 'mdl-shadow--2dp');
		cardTitle.classList.add('mdl-card__title', 'mdl-card--expand');		
		cardAction.classList.add('mdl-card__actions');
		cardText.classList.add('demo-card-image__filename');	
		
		//some attributes so into style elements
		const myStyle=`
		<style>
		.demo-card-image.mdl-card {
		  width: ${myWidth};
		  height: ${myHeight};
		  background: url('${img}') center / cover;
		}
		.demo-card-image > .mdl-card__actions {
		  height: 52px;
		  padding: 16px;
		  background: rgba(0, 0, 0, 0.2);
		}
		.demo-card-image__filename {
		  color: #fff;
		  font-size: 14px;
		  font-weight: 500;
		}
		</style>
		`
		//mdlChip.id=myId;
		cardImage.setAttribute('id',myId);
		cardText.innerHTML=text;
		cardTitle.innerHTML=title;
			//appending elements
		cardAction.appendChild(cardText);
		cardImage.appendChild(cardTitle);
		cardImage.appendChild(cardAction);
		
		//appending  into root component
		console.log(img)
		this.innerHTML=myStyle;
		this.appendChild(cardImage);
		

	}
}
customElements.define('card-image',CardImage);

class CardEvent extends HTMLElement{
	constructor(){
		super();
		// settings attributes
		const myId=this.getAttribute('id');
		const text=this.getAttribute('text');
		const title=this.getAttribute('title');
		const icon=this.getAttribute('icon');
		const myWidth=this.getAttribute('width');
		const myHeight=this.getAttribute('height');
		const myColor=this.getAttribute('color');
		
		//settings elements
		const cardEvent=document.createElement('div');
		const cardDivTitle=document.createElement('div');
		const cardTitle=document.createElement('h4');
		const cardAction=document.createElement('div');
		const cardText=document.createElement('a');
		const cardSpacer=document.createElement('div');
		const cardIcon=document.createElement('i');
		
		// styling css elements created
		cardEvent.classList.add('demo-card-event','mdl-card', 'mdl-shadow--2dp');
		cardDivTitle.classList.add('mdl-card__title', 'mdl-card--expand');		
		cardAction.classList.add('mdl-card__actions','mdl-card--border');
		cardText.classList.add('mdl-button', 'mdl-button--colored', 'mdl-js-button','mdl-js-ripple-effect');
		cardSpacer.classList.add('mdl-layout-spacer');
		cardIcon.classList.add('material-icons');	
		
		//some attributes so into style elements
		const myStyle=`
			<style>
			.demo-card-event.mdl-card {
			width: ${myWidth};
			height: ${myHeight};
			background: ${myColor};
			}
			.demo-card-event > .mdl-card__actions {
			border-color: rgba(255, 255, 255, 0.2);
			}
			.demo-card-event > .mdl-card__title {
			align-items: flex-start;
			}
			.demo-card-event > .mdl-card__title > h4 {
			margin-top: 0;
			}
			.demo-card-event > .mdl-card__actions {
			display: flex;
			box-sizing:border-box;
			align-items: center;
			}
			.demo-card-event > .mdl-card__actions > .material-icons {
			padding-right: 10px;
			}
			.demo-card-event > .mdl-card__title,
			.demo-card-event > .mdl-card__actions,
			.demo-card-event > .mdl-card__actions > .mdl-button {
			color: #fff;
			}
			</style>
					`
		//mdlChip.id=myId;
		cardEvent.setAttribute('id',myId);
		cardText.innerHTML=text;
		cardTitle.innerHTML=title;
		cardIcon.innerHTML=icon;
			//appending elements
		cardDivTitle.appendChild(cardTitle);
		cardAction.appendChild(cardText);		
		cardSpacer.appendChild(cardIcon);
		
		cardEvent.appendChild(cardDivTitle);
		cardEvent.appendChild(cardAction);
		cardEvent.appendChild(cardSpacer);
		
			
		
		
		//appending  into root component
		
		this.innerHTML=myStyle;
		this.appendChild(cardEvent);
		

	}
}
customElements.define('card-event',CardEvent);

class IconBadgeIcon extends HTMLElement{
	constructor(){
		super();
		// settings attributes
		const myId=this.getAttribute('id');
		const icon=this.getAttribute('icon');
		const dataBadge=this.getAttribute('data-badge');
		//settings elements
		const mdlBadge=document.createElement('div');
		
		// styling css elements created
		mdlBadge.classList.add('material-icons', 'mdl-badge' ,'mdl-badge--overlap');
		
		//some attributes so into style elements
		//mdlChip.id=myId;
		mdlBadge.setAttribute('data-badge',dataBadge)
		mdlBadge.innerHTML=icon;
			//appending elements
		
		//appending  into root component
		this.id=myId;
		this.appendChild(mdlBadge);
		

	}
}
customElements.define('i-badge-i',IconBadgeIcon);

class TextBadgeIcon extends HTMLElement{
	constructor(){
		super();
		// settings attributes
		const myId=this.getAttribute('id');
		const text=this.getAttribute('text');
		const dataBadge=this.getAttribute('data-badge');
		//settings elements
		const mdlBadge=document.createElement('SPAN');
		
		// styling css elements created
		mdlBadge.classList.add('mdl-badge');
		
		//some attributes so into style elements
		//mdlChip.id=myId;
		mdlBadge.setAttribute('data-badge',dataBadge)
		mdlBadge.innerHTML=text;
			//appending elements
		
		//appending  into root component
		this.id=myId;
		this.appendChild(mdlBadge);
		

	}
}
customElements.define('t-badge-i',TextBadgeIcon);



class MenuLower  extends HTMLElement{
	constructor(){
		super();
		// settings attributes
		const myId=this.getAttribute('id');
		const iconMenu=this.getAttribute('icon');
		const itensMenu=this.getAttribute('itens');
		const sideMenu=this.getAttribute('side');


		//settings elements
		const mdlChip=document.createElement('SPAN');
		const mdlChipText=document.createElement('SPAN');
		// styling css elements created
		mdlChip.classList.add('mdl-chip');
		mdlChipText.classList.add('mdl-chip_text');
		//some attributes so into style elements
		//mdlChip.id=myId;
		mdlChipText.innerHTML=chiptext;
		console.log(mdlChip)
		//appending elements
		mdlChip.appendChild(mdlChipText)
		//appending  into root component
		this.appendChild(mdlChip);
		console.log(this);
	}

	 menuGenerated(){

		return true;

	}
}
customElements.define('menu-lower',MenuLower);

