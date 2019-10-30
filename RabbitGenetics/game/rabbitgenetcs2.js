/*
	Rabbit Genetics JS
	by Niabi
	
	Functions
	- mouseY(evt)
	- folow(evt)
	
	- showhidehelp()
	- showTip(tipText)
	- hideTip()
	- togglecolorinfo()
	- animateTransparency(layer)
	
	- reverseAllele(allele)
	- evaluateGenetics()
	- updateDisplay(newColor, isChestnut, isExtension, isRabicano, isSooty, isTobiano, isOvero, isSplashed, isVarnish)
	- updateName(color)
	- updateDescription(color)
	
	- randomhorse()
*/

//////////////////////////////////////////////////////////////////////////
// reverseAllele(allele)
//input: an HTML Image Object representing an allele
// reverses the image and therefore value of the given allele
function reverseAllele(allele)
{
	debugReader.innerHTML = 'Being passed '+allele+' of source "'+allele.src+'"<br>';
	var tempArray = allele.src.split("/");
	var thisType = tempArray[tempArray.length-1];
	thisType = thisType.substring(0,thisType.length-4);
	var thisAllele = allele.name.slice(-1);
	var newType='';
	debugReader.innerHTML += tempArray[tempArray.length-1]+' image belongs to allele '+thisType+'<br>';
	switch (thisType[0])
	{
		case '_':
			switch(thisType) {
				case "a":
					newType="at";
					break;
				case "_cr":
					newType="cr";
					break;
				case "_rn":
					newType="rn";
					this.document.images['sb'+thisAllele].src = path + "_sb.png";
					this.document.images['w'+thisAllele].src = path + "_w.png";
					this.document.images['to'+thisAllele].src = path + "_to.png";
					break;
				case "_sb":
					newType="sb";
					this.document.images['rn'+thisAllele].src = path + "_rn.png";
					this.document.images['w'+thisAllele].src = path + "_w.png";
					this.document.images['to'+thisAllele].src = path + "_to.png";
					break;
				case "_w":
					newType="w";
					this.document.images['rn'+thisAllele].src = path + "_rn.png";
					this.document.images['sb'+thisAllele].src = path + "_sb.png";
					this.document.images['to'+thisAllele].src = path + "_to.png";
					break;
				case "_to":
					newType="to";
					this.document.images['rn'+thisAllele].src = path + "_rn.png";
					this.document.images['sb'+thisAllele].src = path + "_sb.png";
					this.document.images['w'+thisAllele].src = path + "_w.png";
					break;
				default:
					newType=thisType.slice(1);
			}
			break;
		default:
			switch(thisType){
				case "at":
					newType="_a";
					break;
				case "_a":
					newType="a";
					break;
				case "cr":
					newType="prl";
					break;
				case "prl":
					newType="_cr";
					break;
				default:
					newType='_'+thisType;
			}
	}
	allele.src = path + newType+'.png';
	debugReader.innerHTML+='for allele '+thisAllele+' turning '+thisType+' to '+newType+'<br>returning path "'+allele.src+'"';
	
	evaluateGenetics();
}
		