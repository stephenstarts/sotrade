import { writable } from 'svelte/store'
import type{ ProfileAttrs } from './profile.type'


export const profile = writable<ProfileAttrs>({
    username: '',
    website: '',
    avatar_url: '',
    enabled: true,
    beta: false,
    dev: false,
    fName: '',
    lName: ''
});
