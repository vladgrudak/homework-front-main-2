const initState = {
    themeId: 1,
}


export type ThemeState = typeof initState

export const themeReducer = (state = initState, action: ChangeThemeAC): ThemeState => {// fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            console.log(action.id)
            return {themeId: action.id}

        default:
            return state
    }
}

type ChangeThemeAC = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): ChangeThemeAC => ({type: 'SET_THEME_ID', id}) // fix any
