//Imports first
import {ModelScene, WALL, Wall, SETTINGS, Difficulty, ENV, LOOKUP,Environment} from "https://deno.land/x/remapper@2.0.2/src/mod.ts";

//change these to fit yor difficulties
const map = new Difficulty("ExpertPlusLawless.dat", "ExpertPlusStandard.dat");

//This is a recomendation, there are other settings btw
SETTINGS.NO_HUD

//Move the bts environment Out of sight
const move = new Environment("BTSEnvironment.[0]Environment", LOOKUP.CONTAINS)
move.position = [0,-99999999, 0]
move.push();

//blender env stuff(now called ModelScene)
const scene = new ModelScene(new Environment(ENV.BTS.PILLAR.ID,LOOKUP.REGEX), ENV.BTS.PILLAR.SCALE, ENV.BTS.PILLAR.ANCHOR)
scene.animate([
    ["model", 0, 100],
])

const laserscene = new ModelScene(new Environment(ENV.BTS.SOLID_LASER.ID,LOOKUP.REGEX), ENV.BTS.SOLID_LASER.SCALE, ENV.BTS.SOLID_LASER.ANCHOR)
laserscene.animate([
    ["laser", 0, 100],
])

//This is a cool way to make water quick and easy!
function water(height: number, start: number, duration: number){
    const wall = new Wall(147, 193, WALL.CROUCH);
    wall.life = duration;
    wall.lifeStart = start; 
    wall.animate.definitePosition = [-1000, height, -1000];
    wall.animate.add(ANIM.DEFINITE_POSITION, [-1000, height, -300, 1]);
    wall.scale = [2000, 0.5, 2000];
    wall.color = [0, 1.5, 2.3, 10];
    wall.fake = true
    wall.interactable = false
    wall.push();
}

//this is how I like to put my water, you can change it to fit your likings
water(-2, 0, 100);

map.save():
