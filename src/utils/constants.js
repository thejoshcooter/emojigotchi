// STATUSES
export const EGG = 'EGG'
export const HAPPY = 'HAPPY'
export const SAD = 'SAD'
export const MAD = 'MAD'
export const DEAD = 'DEAD'

// ACTION AND DECAY RATES
export const HUNGER_DECAY_RATE = 2
export const FEED_ACTION_RATE = 10

export const SLEEP_DECAY_RATE = 2
export const SLEEP_ACTION_RATE = 10

export const LOVE_DECAY_RATE = 2
export const LOVE_ACTION_RATE = 10

// STATUS LIMITERS
export const HUNGER_LIMITER_LOW = null
export const HUNGER_LIMITER_CRITICAL = null
export const SLEEP_LIMITER_LOW = null
export const SLEEP_LIMITER_CRITICAL = null
export const LOVE_LIMITER_LOW = null
export const LOVE_LIMITER_CRITICAL = null

// STATUS NOTIFICATIONS
export const statusNotifications = {
    egg: 'your pet is an egg, it will hatch soon',
    happy: 'your pet is happy and healthy',
    sad: 'your pet is feeling a bit down',
    mad: 'your pet is very unhappy',
    dead: 'your pet is dead',
    hunger: {
        full: 'your pet is well fed',
        low: 'your pet is a little hungry',
        critical: 'your pet is on the verge of starvation'
    },
    sleep: {
        full: 'your pet is well rested',
        low: 'your pet is getting sleepy',
        critical: 'your pet is sleep deprived'
    },
    love: {
        full: 'your pet feels loved',
        low: 'your pet is feeling a little unloved',
        critical: 'your pet is feeling neglected'
    }
}