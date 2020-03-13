module.exports = {
	constants : {
		// Cheat sheets
		item_sheet       : 'https://progameguides.com/wp-content/uploads/2019/06/tft-item-cheat-sheet-set-3-2.png',
		full_sheet       : 'https://progameguides.com/wp-content/uploads/2019/06/tft-ultimate-cheat-sheet-set3-3.png',
		wide_sheet       : 'https://progameguides.com/wp-content/uploads/2019/06/tft-desktop-cheat-sheet-set3-2.png',
		item_sheet_local : require(`../../static/img/beta/tft-sheet-item-beta.png`),
		full_sheet_local : require(`../../static/img/beta/tft-sheet-full-beta.png`),
		wide_sheet_local : require(`../../static/img/beta/tft-sheet-wide-beta.png`),
	},

	items     : {
		// Base Items --------------------------------------
		belt            : {
			id   : 'giantsbelt',
			name : "Giant's Belt",
			perk : '+200 Base Health',
		},
		bow             : {
			id   : 'recurvebow',
			name : 'Recurve Bow',
			perk : '+20% Attack Speed',
		},
		cloak           : {
			id   : 'negatroncloak',
			name : 'Negatron Cloak',
			perk : '+20 Magic Resist',
		},
		glove           : {
			id   : 'sparringgloves',
			name : 'Sparring Gloves',
			perk : '+10& Dodge Chance, +10% Crit Chance',
		},
		rod             : {
			id   : 'needlesslylargerod',
			name : 'Needlessly Large Rod',
			perk : '+20% Spell Damage',
		},
		spatula         : {
			id   : 'spatula',
			name : 'Spatula',
			perk : 'It must do something...',
		},
		sword           : {
			id   : 'bfsword',
			name : 'B.F. Sword',
			perk : '+15 Attack Damage',
		},
		tear            : {
			id   : 'tearofthegoddess',
			name : 'Tear of the Goddess',
			perk : '+20 Starting Mana',
		},
		vest            : {
			id   : 'chainvest',
			name : 'Chain Vest',
			perk : '+25 Armor',
		},

		// Combos -----------------------------------------
		belt_belt       : {
			id        : 'warmogsarmor',
			name      : `Warmog's Armor`,
			perk      : 'Regen 6% missing HP/sec',
			perk_full : `Wearer regenerates 6% of their missing Health per second.`,
			perk_100  : `Wearer regenerates 6% of their missing Health per second`,
		},
		//****************************************************************************************************
		//* NEW: Zz’Rot Portal (prev. titanic hydra)
		//****************************************************************************************************
		belt_bow        : {
			id        : 'zzrotportal',
			name      : `Zz’Rot Portal`,
			perk_full : `Upon death, summon a Voidling with 1000/2000/4000 HP that taunts all nearby enemies`,
			perk_100  : `Upon death, summon Voidling with 1000/2000/4000HP that taunts nearby enemies`,
			perk      : `On death, summon Voidling (1000/2000/4000HP) that taunts enemies`,
		},
		belt_cloak      : {
			id        : 'zephyr',
			name      : 'Zephyr',
			perk      : 'Banish an enemy for 6s on combat start',
			perk_full : `When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 6 seconds.`,
			perk_100  : `On combat start, closest enemy on opposite side of arena is removed from combat for 6s`,
		},
		belt_glove      : {
			id        : 'trapclaw',
			name      : `Trap Claw`,
			perk      : 'Start w/ spell shield, stuns breaker for 4s',
			perk_full : `At the beginning of combat, the wearer gains a shield that blocks the first enemy spell that hits them. The enemy that breaks the shield is stunned for 4 seconds.`,
			perk_100  : `At combat start, block first enemy spell hit. Enemy breaker stunned for 4s`,
		},
		belt_rod        : {
			id        : 'morellonomicon',
			name      : `Morellonomicon`,
			perk      : 'Spells burn for 18% of max HP over 10s, 80% heal reduction during burn',
			perk_full : `When the wearer deals damage with their spell, they burn the target, dealing 18% of the target's Maximum Health as true damage over 10 seconds and reducing healing by 80% for the duration of the burn. A champion can only have one burn effect at a time, preferring the strongest.`,
			perk_100  : `If you deal Spell, burn 18% of their Max HP (True) & -80% heal over 10s. 1 burn/unit (stronger burn)`,
		},
		belt_spatula    : {
			id        : 'frozenmallet',
			name      : `Frozen Mallet`,
			perk      : 'Also Glacial',
			perk_full : `Wearer is also a Glacial`,
			perk_100  : `Wearer is also a Glacial`,
		},
		// TODO: figure out if 20% or 15%
		belt_sword      : {
			id        : 'zekesherald',
			name      : `Zeke's Herald`,
			perk      : 'At start, +15% Atk Speed for allies 2 spaces L&R',
			perk_full : `When combat begins, the wearer and all allies within 2 hexes in the same row gain +15% Attack Speed for the rest of combat.`,
			perk_100  : `On combat start, +15% Atk Speed for wearer & allies 2 hexes L&R (entire round) `,
		},
		belt_tear       : {
			id        : 'redemption',
			name      : `Redemption`,
			perk      : 'At 30% HP, heal nearby allies for 1200 HP after 2.5s. Triggers once.',
			perk_full : `When the wearer falls below 30% Health, nearby allies are healed for 1200 Health after a 2.5 second delay. This effect can trigger once per combat.`,
			perk_100  : `Once unit is <30% HP, 1200 HP for nearby allies after 2.5s delay (once per round)`,
		},
		belt_vest       : {
			id        : 'redbuff',
			name      : `Red Buff`,
			perk      : 'Atks burn for 18% max HP over 10s & disable healing',
			perk_full : `Wearer's Basic Attacks burn the target on-hit, dealing 18% of the target's Maximum Health as true damage over 10 seconds and reducing healing by 80% for the duration of the burn. A champion can only have one burn effect at a time, preferring the strongest.`,
			perk_100  : `Basic on-hits burn 18% of their Max HP (True) & -80% healing over 10s. 1 burn/unit (stronger burn)`,
		},
		// BOW
		bow_bow         : {
			id        : 'rapidfirecannon',
			name      : `Rapid Fire Cannon`,
			perk      : `Doubles atk range. Atks can't be dodged`,
			perk_full : `Wearer gains +100% Attack Range.`,
			perk_100  : `Wearer gains +100% Attack Range`,
		},
		bow_cloak       : {
			id        : 'runaanshurricane',
			name      : `Runaan's Hurricane`,
			perk      : 'Atks extra enemy & deals 60% dmg (on hit effects)',
			perk_full : `Basic Attacks fire an additional missile at another nearby enemy, dealing 60% of the wearer's Attack damage and applying on-hit effects.`,
			perk_100  : `Basic Atks hit extra nearby enemy for 60% of your Atk Dmg (applies on-hit effects)`,
		},
		bow_glove       : {
			id        : 'lastwhisper',
			name      : `Last Whisper`,
			perk      : 'Crit hits reduce armor by 90% for 3s (no stack)',
			perk_full : `Critical hits reduce the target’s Armor by 90% for 3 seconds. This effect does not stack.`,
			perk_100  : `Crit hits reduce target’s Armor by 90% for 3s (doesn't stack)`,
		},
		bow_rod         : {
			id        : 'guinsoosrageblade',
			name      : `Guinsoo's Rageblade`,
			perk      : 'Atks give +5% atk speed (stacks infinitely)',
			perk_full : `Basic Attacks grant the wearer +4% bonus Attack Speed for the rest of combat. This effect can stack any number of times.`,
			perk_100  : `Basic Atks grant wearer +4% Atk Speed for rest of combat (infinite stacks)`,
		},
		bow_spatula     : {
			id        : 'bladeoftheruinedking',
			name      : `Blade of the Ruined King`,
			perk      : 'Also Blademaster',
			perk_full : `Wearer is also a Blademaster`,
			perk_100  : `Wearer is also a Blademaster`,
		},
		bow_sword       : {
			id        : 'giantslayer',
			name      : `Giant Slayer`,
			perk      : "Atks deal +9% enemy's current HP as physical dmg",
			perk_full : `The wearer's basic attacks deal an additional 9% of the target's Maximum Health as true damage.`,
			perk_100  : `Wearer's basic attacks deal +9% of the target's Max HP as True Damage`,
		},
		bow_tear        : {
			id        : 'statikkshiv',
			name      : `Statikk Shiv`,
			perk      : 'Deal 85 magic dmg to 3/4/5 enemies every 3rd atk',
			perk_full : `Every third Basic Attack from the wearer deals 85 magic damage to 3/4/5 enemies (scales with wearer’s Star Level).`,
			perk_100  : `Every 3rd Basic Attack from wearer deals 85 Magic Damage to 3/4/5 enemies`,
		},
		bow_vest        : {
			id        : 'titansresolve',
			name      : `Titan's Resolve`,
			perk      : 'When hit or crits, gain 2% dmg (100% max). At 50 stacks, +25 armor & MR (resets each round)',
			perk_full : `When the wearer is hit or inflicts a critical strike, they gain a 2% stacking damage bonus, up to 100%. At 50 stacks, the wearer gains 25 Armor and MR; and increases in size. Resets every round.`,
			perk_100  : `When you get hit or crit strike, stack +2% Dmg. @ 100% max, +25 Armor & MR (round reset)`,
		},

		// CLOAK
		cloak_cloak     : {
			id        : 'dragonsclaw',
			name      : `Dragon's Claw`,
			perk      : '50% magic dmg resistance',
			perk_full : `Wearer gains 50% resistance to magic damage.`,
			perk_100  : `Wearer gains 50% resistance to magic damage`,
		},
		cloak_glove     : {
			id        : 'quicksilver',
			name      : `Quicksilver`,
			perk      : 'Immune to crowd control [UNIQUE]',
			perk_full : `[UNIQUE] The wearer is immune to crowd control.`,
			perk_100  : `[UNIQUE] The wearer is immune to crowd control`,
		},
		cloak_rod       : {
			id        : 'ionicspark',
			name      : `Ionic Spark`,
			perk      : 'Zap enemies that cast spell w/in 3 hex for 225% max mana as magic dmg',
			perk_full : `Enemies within 3 hexes that cast a spell are zapped, taking magic damage equal to 225% of their max Mana.`,
			perk_100  : `Zap enemies that cast a spell w/in 3 hexes for Magic Dmg (225% of their Max Mana)`,
		},
		cloak_spatula   : {
			id        : 'talismanoflight',
			name      : `Talisman of Light`,
			perk      : 'Also Light',
			perk_full : `Wearer is also a Light`,
			perk_100  : `Wearer is also a Light`,
		},
		cloak_sword     : {
			id        : 'bloodthirster',
			name      : `Bloodthirster`,
			perk      : 'Atks heal for 50% of dmg',
			perk_full : `Basic Attacks heal the wearer for 40% of the damage dealt.`,
			perk_100  : `Basic Attacks heal the wearer for 40% of the damage dealt`,
		},
		//********************************************************************************
		//* NEW: Chalice of Favor (replaced hush)
		//********************************************************************************
		cloak_tear      : {
			id        : 'chaliceoffavor',
			name      : `Chalice of Favor`,
			perk_full : `Whenever you cast your spell, give all nearby allies 10 mana`,
			perk_100  : `Whenever you cast your spell, give all nearby allies 10 mana`,
			perk      : 'When you cast spell, +10 mana for all nearby allies',
			// ----------------------------------------------------------------------------------------------------  100 dashes
		},
		cloak_vest      : {
			id        : 'swordbreaker',
			name      : `Swordbreaker`,
			perk      : 'Atks have 25% chance to disarm for 3s',
			perk_full : `Wearer's Basic Attacks have a 25% chance to disarm the target for 3 seconds, preventing that enemy from Basic Attacking.`,
			perk_100  : `Basic Attacks have 25% chance to prevent enemy from Basic Attacking for 3s`,
		},
		// GLOVE
		glove_glove     : {
			id        : 'thiefsgloves',
			name      : `Thief's Gloves`,
			perk      : 'Start w/ 2 temp items (takes all slots)',
			perk_full : `At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level.`,
			perk_100  : `At planning phase start, equip 2 temp items (power based on player level)`,
		},
		glove_rod       : {
			id        : 'jeweledgauntlet',
			name      : `Jeweled Gauntlet`,
			perk      : 'Abilities can crit strike',
			perk_full : `The wearer's spells can critically strike.`,
			perk_100  : `Wearer's spells can critically strike`,
		},
		glove_spatula   : {
			id        : 'berserkeraxe',
			name      : `Berserker Axe`,
			perk      : 'Also Berserker',
			perk_full : `Wearer is also a Berserker`,
			perk_100  : `Wearer is also a Berserker`,
		},
		glove_sword     : {
			id        : 'infinityedge',
			name      : `Infinity Edge`,
			perk      : 'Crit strikes deal +100% dmg',
			perk_full : `The wearer gains +100% Critical Strike Damage.`,
			perk_100  : `Wearer gains +100% Critical Strike Damage`,
		},
		glove_tear      : {
			id        : 'handofjustice',
			name      : `Hand of Justice`,
			perk      : 'Start w/ +50% dmg or +50 life on hit for round',
			perk_full : `At the beginning of each planning phase, the wearer gains one of the following: Basic Attacks and Spells deal +50% Damage or Basic Attacks heal 50 Health on-hit.`,
			perk_100  : `At planning start, either get: +50% Dmg (Basic & Spells) or Basic On-Hits heal 50HP`,
		},
		//********************************************************************************
		//* NEW: Shroud of Stillness (prev. iceborn gauntlet)
		//********************************************************************************
		glove_vest      : {
			id        : 'shroudofstillness',
			name      : `Shroud of Stillness`,
			perk_full : `At the start of combat, shoot a beam forward that causes all enemies hit to have their max mana increased by 40% until they cast once`,
			perk_100  : `At combat start, shoot beam forward. Increase Max Mana on Enemies hit by 40% until first cast`,
			perk      : `At combat start, shoot beam forward. Increase Max Mana on Enemies hit by 40% until first cast`,
		},
		// ROD
		rod_rod         : {
			id        : 'rabadonsdeathcap',
			name      : `Rabadon's Death Cap`,
			perk      : '+75% spell power from all sources',
			perk_full : `Wearer gains +75% Spell Power Amplification. (All sources of Spell Power are 75% more effective)`,
			perk_100  : `+75% Spell Power Amplification. (All sources of Spell Power are 75% more effective)`,
		},
		rod_spatula     : {
			id        : 'infernocinder',
			name      : `Inferno Cinder`,
			perk      : 'Also Inferno',
			perk_full : `Wearer is also Inferno`,
			perk_100  : `Wearer is also Inferno`,
		},
		rod_sword       : {
			id        : 'hextechgunblade',
			name      : `Hextech Gunblade`,
			perk      : 'Heal for 33% of dmg dealt',
			perk_full : `Basic Attacks and spells heal the wearer for 33% of the damage dealt.`,
			perk_100  : `Basic Attacks & Spells heal the wearer for 33% of the damage dealt`,
		},
		rod_tear        : {
			id        : 'ludensecho',
			name      : `Luden's Echo`,
			perk      : 'Deals 150/175/225 magic dmg',
			perk_full : `When the wearer deals damage with their spell, the first target hit and up to 3 enemies within 2 hexes are dealt an additional 150/175/225 magic damage (scales with wearer’s Star Level).`,
			perk_100  : `When unit deals Spell Dmg, extra 150/175/225 Magic Dmg to first target & max 3 enemies w/in 2 hexes `,
		},
		rod_vest        : {
			id        : 'locketoftheironsolari',
			name      : `Locket of the Iron Solari`,
			perk      : 'Shields allies 2 L&R in row for 250/275/350 dmg for 8s',
			perk_full : `Shields allies within two hexes in the same row for 250/275/300 damage for 8 seconds (scales with wearer’s Star Level)`,
			perk_100  : `Shields allies within 2 hexes left and right for 250/275/300 Damage for 8s`,
		},
		// SPATULA
		spatula_spatula : {
			id        : 'forceofnature',
			name      : `Force of Nature`,
			perk      : '+1 team size',
			perk_full : `Wearer's team gains +1 maximum team size`,
			perk_100  : `Wearer's team gains +1 maximum team size`,
		},
		spatula_sword   : {
			id        : 'youmuusghostblade',
			name      : `Youmuu's Ghostblade`,
			perk      : 'Also Assassin',
			perk_full : `Wearer is also an Assassin`,
			perk_100  : `Wearer is also an Assassin`,
		},
		spatula_tear    : {
			id        : 'magescap',
			name      : `Mage's Cap`,
			perk      : 'Also Mage',
			perk_full : `Wearer is also a Mage`,
			perk_100  : `Wearer is also a Mage`,
		},
		spatula_vest    : {
			id        : 'wardensmail',
			name      : `Warden's Mail`,
			perk      : 'Also Warden',
			perk_full : `Wearer is also a Warden`,
			perk_100  : `Wearer is also a Warden`,
		},
		// SWORD
		sword_sword     : {
			id        : 'deathblade',
			name      : `Deathblade`,
			perk      : 'On kill/assist, +15 atk (stacks infinitely)',
			perk_full : `Whenever the wearer kills or participates in killing an enemy, gain +15 Attack Damage for the remainder of combat. This effect can stack any number of times.`,
			perk_100  : `On Kill/Assist, +15 Attack Damage for rest of combat (infinite stack)`,
		},
		sword_tear      : {
			id        : 'spearofshojin',
			name      : `Spear of Shojin`,
			perk      : 'After cast, +18% max mana per atk',
			perk_full : `After casting their spell, the wearer's Basic Attacks restore 18% of their Maximum Mana.`,
			perk_100  : `After casting spell, wearer's Basic Attacks restore 18% of their Max Mana`,
		},
		sword_vest      : {
			id        : 'guardianangel',
			name      : `Guardian Angel`,
			perk      : 'Revives w/ 400HP after 2s',
			perk_full : `Upon death, cleanses negative effects and revives after 2 seconds with 400 health. This effect can trigger once per combat`,
			perk_100  : `Revive after 2s with 400 HP and clean of negative effects (Once per combat)`,
		},
		// TEAR
		tear_tear       : {
			id        : 'seraphsembrace',
			name      : `Seraph's Embrace`,
			perk      : '+20 mana each time a spell is cast',
			perk_full : `After casting their spell, the wearer restores 20 Mana.`,
			perk_100  : `After casting their Spell, Wearer restores 20 Mana`,
		},
		tear_vest       : {
			id        : 'frozenheart',
			name      : `Frozen Heart`,
			perk      : `Nearby enemy atk speed slowed 40%. (Stack increases effect radius)`,
			perk_full : `Nearby enemies' attack speed is slowed by 40%. (Stacking increases the radius of this effect, not the amount of the slow)`,
			perk_100  : `Nearby enemies' Attack Speed slowed 40% (Stacking increases radius, not slowness)`,
		},
		// VEST
		vest_vest       : {
			id        : 'bramblevest',
			name      : `Bramble Vest`,
			perk      :
				'Negates bonus dmg from crit. When hit by basic atk, deal 100/140/200 magic dmg to nearby enemies (Max every 2s)',
			perk_full : `Negates bonus damage from critical hits on the wearer. When the wearer is hit by a basic attack, deals 100/140/200 (based on Star level) magic damage to all nearby enemies (2s second cooldown).`,
			perk_100  : `Blocks bonus Crit Dmg. When hit by Basic Atk, 100/140/200 Magic Dmg to nearby enemies. 2s cooldown`,
		},
	},
};

// ----------------------------------------------------------------------------------------------------  100 dashes
