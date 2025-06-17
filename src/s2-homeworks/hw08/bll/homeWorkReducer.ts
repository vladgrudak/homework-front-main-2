import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return [...state].sort((p1, p2) => p1.name.localeCompare(p2.name))
            } else if (action.payload === 'down') {
                return [...state].sort((p1, p2) => p2.name.localeCompare(p1.name))
            }
            return state
        }
        case 'check': {
            const sortAge = action.payload
            return state.filter(person => person.age >= sortAge)
        }
        default:
            return state
    }
}
