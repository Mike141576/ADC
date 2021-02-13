const freezerframes = new DrawAnimation();

freezerframes.frameCount = 5;

const freezer = extendContent(GenericCrafter, "freezer",{});

freezer.drawer = freezerframes;