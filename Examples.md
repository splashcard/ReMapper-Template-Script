This import contains all you will need for *this script*  You may need to add mor things like REGEX or something else as you add to your map independently

1st is your difficulties, the statment goes ("input.dat", "output.dat")  so change these to  how you want them, just remember that the difficulty that remapper writes  to will be the second in the statment

the settings are a complete remcomendation, `SETTINGS.NO_HUD` will force the beat saber setting to remove the hud from your map, making for a more immersive experience.  If you want to find other settings functions I reccomend you check out the constants.md for remapper linked here:https://github.com/Swifter1243/ReMapper/blob/master/src/constants.ts#L296 (just ctrl +  f for `SETTINGS`)

Now we get rid of the environment to make room for your own!  This isn't too complicated, it literally just moves the entirety of the BTS Environment to -9999999 so you cant see it.  Other environment statments work like this, if you want to add clouds or something else you could do something like this: 
```
const clouds = new Environment("HighClouds")
    clouds.duplicate = 1;
    couds.position = [0,0,40];
    clouds.push();
 ```

and now we get to the exiting part, here is blender to environment statment (newly renamed as ModelScene)  After Exporting from the blender to Env plugin you can just put your path in to the quotes and the two numbers  that follow are `starttime, duration`  you can add more scenes by repeating the part in the square brackets





```
const scene = new ModelScene(new Environment(ENV.BTS.PILLAR.ID,LOOKUP.REGEX), ENV.BTS.PILLAR.SCALE, ENV.BTS.PILLAR.ANCHOR)
scene.animate([
    ["model1", 0, 69],
    ["model2", 70, 420],
   ])
   
```
Now We do Model Scene lasers!
Rember, these can get tricky, but don't worry, you'll get the hang of it and it will be like the back of your own hand soon enough.  In order to light these lasers and make them look nice, I reccomend that you use Loopymtb's guide for doing this linked here: https://github.com/Loopymtb/NoodleMappingGuide/wiki/Remapper
model Scene lasers work basically the same as Model scene BTS cubes as the scale, position, and rotation will be copied into the game exactly as in your model, also remember uou *must* be using the BTS envrionment to make this work.

Now We have come to the water function.  You in generall wont need to touch anything in the function definition itself, but when calling the function `water(0,0,100)` the numbers are sequenced as `(height, lifestart, duration)` I like to put my water at roughly -2 y value and the lifestart and duration will depend on your map, if you don't need water then you can just delete this whole function.

And finnaly we have `map.save();` This will take the stated difficulty from before and export your changes there.

Now some suggestions for running your map follow the install instructions for ReMapper linked here: https://github.com/Swifter1243/ReMapper/blob/master/README.md
When it says to use the denon version, trust me just use the denon version.  It's so much faster and easier in the long run, just grab the scripts.json from this repositiory and you will barley have to do anything.  Also if you rename this script, before running with `denon rm` make sure the script is named `script.ts` or you will get an error.  Good luck and I hope you hav fun with this template.
