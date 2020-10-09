

export class ExtendableWeapon {

	readonly SWEP: Weapon;

	constructor(swep: Weapon, hooks: WeaponHooks) {
		this.SWEP = swep;
	}
}

ExtendableWeapon.prototype.__newindex = function() {
	
}
