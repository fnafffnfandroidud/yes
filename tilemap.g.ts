// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`100010000206060606060606060606060606060301070707070707070701010101010101070701010101010101070707010101010701010101010101010101070701010107010101070707070701010107010101070101010709010107070701010701010701010107010101010107010107010107010101070101010101070101010701070101010701010101010701010107010701010101010101010107010101070107070101010101010107010101010701010701010101010107010101010107010101070701010107010101010101070101010108070707010101010a010701010101010101070101010101010107010104010101010101010101010107070105`, img`
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. 2 2 2 2 2 2 2 2 2 2 . . 2 . . 
2 2 . . . . . . . 2 2 2 . 2 . . 
2 . . . . . . . . . . 2 2 2 . . 
2 . . . 2 2 2 2 2 . . . 2 . 2 . 
2 . . . 2 . . . 2 2 2 . . 2 . 2 
2 . . . 2 . . . . . 2 . . 2 . 2 
2 . . . 2 . . . . . 2 . . . 2 2 
2 . . . 2 . . . . . 2 . . . 2 2 
2 . . . . . . . . . 2 . . . 2 . 
2 2 . . . . . . . 2 . . . . 2 . 
. 2 . . . . . . 2 . . . . . 2 . 
. . 2 2 . . . 2 . . . . . . 2 . 
. . . 2 2 2 2 . . . . . . 2 . . 
. . . . . 2 . . . . . . . 2 . . 
. . . . . . . . . . . . 2 2 . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
