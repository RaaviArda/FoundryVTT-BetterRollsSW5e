function i18n(key) {
	return game.i18n.localize(key);
}

Hooks.once("init", () => {
	console.log("Better Rolls | Init");
	/**
	* Register better rolls setting
	*/
	game.settings.register("betterrollssw5e", "diceEnabled", {
		name: i18n("br5e.diceEnabled.name"),
		hint: i18n("br5e.diceEnabled.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
	
	game.settings.register("betterrollssw5e", "d20Mode", {
		name: i18n("br5e.d20Mode.name"),
		hint: i18n("br5e.d20Mode.hint"),
		scope: "world",
		config: true,
		default: 2,
		type: Number,
		choices: {
			1: i18n("br5e.d20Mode.choices.1"),
			2: i18n("br5e.d20Mode.choices.2"),
			3: i18n("br5e.d20Mode.choices.3")
		}
	});
	
	/**
	* Register added roll buttons
	*/
	game.settings.register("betterrollssw5e", "rollButtonsEnabled", {
		name: i18n("br5e.rollButtonsEnabled.name"),
		hint: i18n("br5e.rollButtonsEnabled.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
	
	/**
	* Register better roll for icon
	*/
	game.settings.register("betterrollssw5e", "imageButtonEnabled", {
		name: i18n("br5e.imageButtonEnabled.name"),
		hint: i18n("br5e.imageButtonEnabled.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
	
	game.settings.register("betterrollssw5e", "altSecondaryEnabled", {
		name: i18n("br5e.altSecondaryEnabled.name"),
		hint: i18n("br5e.altSecondaryEnabled.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
	
	/**
	* Register quick roll defaults for description
	*/
	game.settings.register("betterrollssw5e", "quickDefaultDescriptionEnabled", {
		name: i18n("br5e.quickDefaultDescriptionEnabled.name"),
		hint: i18n("br5e.quickDefaultDescriptionEnabled.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});

	game.settings.register("betterrollssw5e", "defaultRollArt", {
		name: i18n("br5e.defaultRollArt.name"),
		hint: i18n("br5e.defaultRollArt.hint"),
		scope: "world",
		config: true,
		default: "actor",
		type: String,
		choices: {
			"actor": i18n("Actor"),
			"token": i18n("Token")
		}
	});
	
	/**
	* Register roll label options
	*/
	game.settings.register("betterrollssw5e", "rollTitlePlacement", {
		name: i18n("br5e.rollTitlePlacement.name"),
		hint: i18n("br5e.rollTitlePlacement.hint"),
		scope: "world",
		config: true,
		default: "1",
		type: String,
		choices: {
			"0": i18n("br5e.damageRollPlacement.choices.0"),
			"1": i18n("br5e.damageRollPlacement.choices.1")
		}
	});
	
	game.settings.register("betterrollssw5e", "damageTitlePlacement", {
		name: i18n("br5e.damageTitlePlacement.name"),
		hint: i18n("br5e.damageTitlePlacement.hint"),
		scope: "world",
		config: true,
		default: "1",
		type: String,
		choices: {
			"0": i18n("br5e.damageRollPlacement.choices.0"),
			"1": i18n("br5e.damageRollPlacement.choices.1"),
			"2": i18n("br5e.damageRollPlacement.choices.2"),
			"3": i18n("br5e.damageRollPlacement.choices.3")
		}
	});
	
	game.settings.register("betterrollssw5e", "damageContextPlacement", {
		name: i18n("br5e.damageContextEnabled.name"),
		hint: i18n("br5e.damageContextEnabled.hint"),
		scope: "world",
		config: true,
		default: "1",
		type: String,
		choices: {
			"0": i18n("br5e.damageRollPlacement.choices.0"),
			"1": i18n("br5e.damageRollPlacement.choices.1"),
			"2": i18n("br5e.damageRollPlacement.choices.2"),
			"3": i18n("br5e.damageRollPlacement.choices.3")
		}
	});
	
	game.settings.register("betterrollssw5e", "damageRollPlacement", {
		name: i18n("br5e.damageRollPlacement.name"),
		hint: i18n("br5e.damageRollPlacement.hint"),
		scope: "world",
		config: true,
		default: "1",
		type: String,
		choices: {
			"0": i18n("br5e.damageRollPlacement.choices.0"),
			"1": i18n("br5e.damageRollPlacement.choices.1"),
			"2": i18n("br5e.damageRollPlacement.choices.2"),
			"3": i18n("br5e.damageRollPlacement.choices.3")
		}
	});
	
	game.settings.register("betterrollssw5e", "contextReplacesTitle", {
		name: i18n("br5e.contextReplacesTitle.name"),
		hint: i18n("br5e.contextReplacesTitle.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});
	
	game.settings.register("betterrollssw5e", "contextReplacesDamage", {
		name: i18n("br5e.contextReplacesDamage.name"),
		hint: i18n("br5e.contextReplacesDamage.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});
	
	game.settings.register("betterrollssw5e", "critBehavior", {
		name: i18n("br5e.critBehavior.name"),
		hint: i18n("br5e.critBehavior.hint"),
		scope: "world",
		config: true,
		default: "1",
		type: String,
		choices: {
			"0": i18n("br5e.critBehavior.choices.0"), // No Extra Damage
			"1": i18n("br5e.critBehavior.choices.1"), // Roll Critical Damage Dice
			"2": i18n("br5e.critBehavior.choices.2"), // Roll Base Damage, Max Critical
			"3": i18n("br5e.critBehavior.choices.3"), // Max Base & Critical Damage
		}
	});
	
	game.settings.register("betterrollssw5e", "critString", {
		name: i18n("br5e.critString.name"),
		hint: i18n("br5e.critString.hint"),
		scope: "world",
		config: true,
		default: "Crit",
		type: String
	});
	
	game.settings.register("betterrollssw5e", "chatDamageButtonsEnabled", {
		name: i18n("br5e.chatDamageButtonsEnabled.name"),
		hint: i18n("br5e.chatDamageButtonsEnabled.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
	
	game.settings.register("betterrollssw5e", "playRollSounds", {
		name: i18n("br5e.playRollSounds.name"),
		hint: i18n("br5e.playRollSounds.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
	
	game.settings.register("betterrollssw5e", "hideDC", {
		name: i18n("br5e.hideDC.name"),
		hint: i18n("br5e.hideDC.hint"),
		scope: "world",
		config: true,
		default: "0",
		type: String,
		choices: {
			"0": i18n("br5e.hideDC.choices.0"),
			"1": i18n("br5e.hideDC.choices.1"),
			"2": i18n("br5e.hideDC.choices.2"),
		}
	});

/*
	BetterRollsHooks.addActorSheet("ActorSheet5eNPC");
	BetterRollsHooks.addActorSheet("ActorSheet5eCharacter");
	BetterRollsHooks.addActorSheet("BetterNPCActor5eSheet", ".item .npc-item-name", ".item-summary", {
		itemButton: '.item .rollable', 
		abilityButton: ".ability h4.ability-name.rollable", 
		checkButton: ".ability div span.ability-mod", 
		saveButton: ".saves-div .save .rollable"
	});
	BetterRollsHooks.addActorSheet("BetterNPCActor5eSheetDark", ".item .npc-item-name", ".item-summary", {
		itemButton: '.item .rollable', 
		abilityButton: ".ability h4.ability-name.rollable", 
		checkButton: ".ability div span.ability-mod", 
		saveButton: ".saves-div .save .rollable"
	});
	BetterRollsHooks.addActorSheet("ActorSheet5eCharacterDark");
	BetterRollsHooks.addActorSheet("ActorSheet5eNPCDark");
	BetterRollsHooks.addActorSheet("Alt5eSheet");
	BetterRollsHooks.addItemSheet("ItemSheet5e");
	BetterRollsHooks.addItemSheet("ItemSheet5eDark");
	*/


});

// Modify context menu for damage rolls (they break)
Hooks.on("getChatLogEntryContext", (html, options) => {
	let contextDamageLabels = [
		game.i18n.localize("SW5E.ChatContextDamage"),
		game.i18n.localize("SW5E.ChatContextHealing"),
		game.i18n.localize("SW5E.ChatContextDoubleDamage"),
		game.i18n.localize("SW5E.ChatContextHalfDamage")
	];
	
	for (let i=options.length-1; i>=0; i--) {
		let option = options[i];
		console.log(option.name);
		console.log(option.condition);
		if (contextDamageLabels.includes(option.name)) {
			option.condition = li => canvas.tokens.controlled.length && li.find(".dice-roll").length && !li.find(".red-full").length;
		}
	}
	
	//let canApply = li => canvas.tokens.controlledTokens.length && li.find(".red-damage").length && li.find(".red-full").length;
});