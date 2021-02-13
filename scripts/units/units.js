const upddagger = extendContent(UnitType, "updated-dagger", {});
upddagger.constructor = () => extend(MechUnit, {});
upddagger.abilities.add(new UnitSpawnAbility(UnitTypes.dagger, 1500, 0, 0));
upddagger.immunities = ObjectSet.with(StatusEffects.wet, StatusEffects.muddy);

const updflare = extendContent(UnitType, "updated-flare", {});
updflare.constructor = () => extend(UnitEntity, {});
updflare.abilities.add(new UnitSpawnAbility(UnitTypes.flare, 800, 0, 0));
updflare.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.melting);

const updhorizon = extendContent(UnitType, "updated-horizon", {});
updhorizon.constructor = () => extend(UnitEntity, {});
updhorizon.abilities.add(new ShieldRegenFieldAbility(1.5, 80, 80, 65));
updhorizon.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.melting);

const updzenith = extendContent(UnitType, "updated-zenith", {});
updzenith.constructor = () => extend(UnitEntity, {});
updzenith.abilities.add(new ForceFieldAbility(65, 0.5, 200, 70));
updzenith.immunities = ObjectSet.with(StatusEffects.blasted, StatusEffects.burning, StatusEffects.melting);

const updmace = extendContent(UnitType, "updated-mace", {});
updmace.constructor = () => extend(MechUnit, {});
updmace.abilities.add(new ShieldRegenFieldAbility(1, 100, 80, 60));
updmace.immunities = ObjectSet.with(StatusEffects.melting, StatusEffects.burning);

const guard = extendContent(UnitType, "guard", {});
guard.constructor = () => extend(MechUnit, {});
guard.immunities = ObjectSet.with(StatusEffects.melting, StatusEffects.burning);

const updfortress = extendContent(UnitType, "updated-fortress", {});
updfortress.constructor = () => extend(MechUnit, {});
updfortress.immunities = ObjectSet.with(StatusEffects.melting, StatusEffects.burning, StatusEffects.wet);

const rapics = extendContent(UnitType, "rapics", {});
rapics.constructor = () => extend(LegsUnit, {});
rapics.abilities.add(new MoveLightningAbility(30, 12, 20, 0, 0.75, 1.5, Color.valueOf("bf92f9")));
rapics.groudLayer = Layer.legUnit - 1;

const crown = extendContent(UnitType, "crown", {});
crown.constructor = () => extend(UnitEntity, {});
crown.abilities.add(new ShieldRegenFieldAbility(10, 100, 80, 70));
crown.immunities = ObjectSet.with(StatusEffects.melting, StatusEffects.burning, StatusEffects.wet, StatusEffects.freezing, StatusEffects.sapped);

const glaive = extendContent(UnitType, "glaive", {});
glaive.constructor = () => extend(UnitEntity, {});
glaive.abilities.add(new StatusFieldAbility(StatusEffects.burning, 30, 130, 80));
glaive.immunities = ObjectSet.with(StatusEffects.burning);

const totem = extendContent(UnitType, "totem", {});
totem.constructor = () => extend(MechUnit, {});
totem.abilities.add(new RepairFieldAbility(7, 70, 80));
totem.immunities = ObjectSet.with(StatusEffects.wet, StatusEffects.freezing, StatusEffects.muddy);

const sting = extendContent(UnitType, "sting", {});
sting.constructor = () => extend(UnitEntity, {});
sting.abilities.add(new ShieldRegenFieldAbility(5, 100, 80, 70));
sting.immunities = ObjectSet.with(StatusEffects.unmoving, StatusEffects.freezing);

const spike = extendContent(UnitType, "spike", {});
spike.constructor = () => extend(UnitEntity, {});
spike.abilities.add(new RepairFieldAbility(10, 130, 140), new ShieldRegenFieldAbility(8, 150, 120, 80));
spike.immunities = ObjectSet.with(StatusEffects.unmoving, StatusEffects.freezing, StatusEffects.sapped);

const scythe = extendContent(UnitType, "scythe", {});
scythe.constructor = () => extend(UnitEntity, {});
scythe.immunities = ObjectSet.with(StatusEffects.unmoving, StatusEffects.freezing, StatusEffects.sapped);

const blaster = extendContent(UnitType, "blaster", {});
blaster.constructor = () => extend(MechUnit, {});
blaster.abilities.add(new RepairFieldAbility(4, 30, 30), new ShieldRegenFieldAbility(2, 20, 30, 40));

const updcrown = extendContent(UnitType, "updated-crown", {});
updcrown.constructor = () => extend(UnitEntity, {});
updcrown.abilities.add(new ForceFieldAbility(50, 0.2, 60, 60), new ShieldRegenFieldAbility(8, 60, 45, 70), new UnitSpawnAbility(UnitTypes.crawler, 1200, 0, 0));
updcrown.immunities = ObjectSet.with(StatusEffects.unmoving, StatusEffects.freezing);


const updmono = extendContent(UnitType, "updated-mono", {});
updmono.constructor = () => extend(UnitEntity, {});
updmono.defaultController = () => extend(MinerAI, {});

updmono.flying = true;
updmono.drag = 0.06;
updmono.accel = 0.12;
updmono.speed = 1.5;
updmono.health = 200;
updmono.engineSize = 1.8;
updmono.engineOffSet = 5.7;
updmono.range = 60;
updmono.isCounted = false;
updmono.ammoType = AmmoTypes.powerLow;
updmono.mineTier = 4;
updmono.mineSpeed = 4;

updmono.abilities.add(new RepairFieldAbility(5, 60, 50));

const bullet = extend(MissileBulletType, {});
bullet.speed = 5;
bullet.damage = 20;
bullet.homingPower = 0.09;
bullet.weaveMag = 4;
bullet.weaveScale = 4;
bullet.lifetime = 60;
bullet.keepVelocity = false;
bullet.shootEffect = Fx.shootHeal;
bullet.smokeEffect = Fx.hitLaser;
bullet.hitEffect = Fx.hitLaser;
bullet.despawnEffect = Fx.hitLaser;
bullet.frontColor = Color.white;
bullet.backColor = Pal.heal;
bullet.trailColor = Pal.heal;
bullet.hitSound = Sounds.none;
bullet.healPercent = 7;
bullet.collidesTeam = true;

const weapon = extendContent(Weapon, "heal-weapon-mount", {});
weapon.top = false;
weapon.reload = 30;
weapon.x = 3.5;
weapon.y = -2.5;
weapon.recoil = 2;
weapon.ejectEffect = Fx.none;
weapon.shootSound = Sounds.missile;
weapon.alternate = true;
weapon.shots = 2;
weapon.velocityRnd = 0.5;
weapon.inaccuracy = 10;
weapon.bullet = bullet;

const updpoly = extendContent(UnitType, "updated-poly", {});
updpoly.constructor = () => extend(UnitEntity, {});
updpoly.defaultController = () => extend(BuilderAI, {});

updpoly.ammoType = AmmoTypes.power;
updpoly.flying = true;
updpoly.drag = 0.05;
updpoly.speed = 3;
updpoly.rotateSpeed = 20;
updpoly.accel = 0.1;
updpoly.range = 200;
updpoly.health = 550;
updpoly.buildSpeed = 2;
updpoly.engineOffset = 6.5;
updpoly.hitSize = 13;
updpoly.lowAltitude = true;
updpoly.mineTier = 3;
updpoly.mineSpeed = 5;

updpoly.abilities.add(new RepairFieldAbility(20, 450, 70));
updpoly.weapons.add(weapon);

const updmega = extendContent(UnitType, "updated-mega", {});
updmega.constructor = () => extend(UnitEntity, {});
updmega.defaultController = () => extend(RepairAI, {});
updmega.payloadCapacity = 2;
updmega.ammoType = AmmoTypes.power;
updmega.abilities.add(new RepairFieldAbility(30, 600, 100));
updmega.immunities = ObjectSet.with(StatusEffects.freezing, StatusEffects.burning, StatusEffects.wet);

const trident = extendContent(UnitType, "trident", {});
trident.constructor = () => extend(UnitEntity, {});
trident.payloadCapacity = 1;
trident.ammoType = AmmoTypes.powerLow;
trident.abilities.add(new RepairFieldAbility(30, 600, 100), new ForceFieldAbility(30, 0.1, 50, 80));
trident.immunities = ObjectSet.with(StatusEffects.freezing, StatusEffects.wet);

const hammer = extendContent(UnitType, "hammer", {});
hammer.constructor = () => extend(MechUnit, {});
hammer.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.sapped);

const barrier = extendContent(UnitType, "barrier", {});
barrier.constructor = () => extend(MechUnit, {});
barrier.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.melting, StatusEffects.sapped, StatusEffects.wet);
barrier.abilities.add(new ForceFieldAbility(60, 0.2, 250, 240));

const epidemic = extendContent(UnitType, "epidemic", {});
epidemic.constructor = () => extend(MechUnit, {});
epidemic.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.melting, StatusEffects.sapped, StatusEffects.wet);
epidemic.abilities.add(new UnitSpawnAbility(hammer, 1000, 20, 0), new UnitSpawnAbility(hammer, 1000, -20, 0));

const chill = extendContent(UnitType, "chill", {});
chill.constructor = () => extend(UnitEntity, {});
chill.abilities.add(new StatusFieldAbility(StatusEffects.freezing, 120, 35, 40));

const glacier = extendContent(UnitType, "glacier", {});
glacier.constructor = () => extend(UnitEntity, {});
glacier.immunities = ObjectSet.with(StatusEffects.freezing, StatusEffects.unmoving);
glacier.abilities.add(new StatusFieldAbility(StatusEffects.freezing, 180, 40, 60), new UnitSpawnAbility(chill, 900, -8, -8), new UnitSpawnAbility(chill, 900, 8, -8));

const ss = extendContent(UnitType, "snowstorm", {});
ss.constructor = () => extend(UnitEntity, {});
ss.immunities = ObjectSet.with(StatusEffects.freezing, StatusEffects.unmoving);

const iceclone = extendContent(UnitType, "ice-clone", {});
iceclone.constructor = () => extend(UnitEntity, {});

iceclone.health = 100;
iceclone.speed = 2;
iceclone.accel = 0.04;
iceclone.drag = 0.016;
iceclone.flying = true;
iceclone.range = 60;
iceclone.hitSize = 20;
iceclone.lowAltitude = true;
iceclone.armor = 7;
iceclone.engineOffset = 12;
iceclone.engineSize = 3;

const icehail = extendContent(UnitType, "ice-hail", {});
icehail.constructor = () => extend(UnitEntity, {});
icehail.abilities.add(new UnitSpawnAbility(iceclone, 700, 0, 0));