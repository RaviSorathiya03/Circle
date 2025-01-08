import * as zod from 'zod';

export const userSave = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
    email: zod.string(),

})