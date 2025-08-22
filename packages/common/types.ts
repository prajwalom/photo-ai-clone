import { z } from "zod"

export const TrainModel = z.object({
    name: z.string(),
    types: z.enum(["Man", "Woman", "Other"]),
    age: z.number(),
    ethinicity: z.enum
    (["White", 
        "Black", 
        "East Asian", 
        "South East Asian", 
        "Asian American", 
        "Middle Eastern", 
        "Pacific", 
        "Hispanic"
    ]),

    eyeColor: z.enum(["Brown", "Blue", "Hazel", "Gray"]),
    bald: z.boolean(),
    images: z.array(z.string())


})

export const GenerateImage = z.object({
    promt: z.string(),
    modeleId: z.string(),
    num: z.number(),
})

export const GenerateImagesFromPack = z.object({
    modelId: z.string(),
    packId: z.string(),

})