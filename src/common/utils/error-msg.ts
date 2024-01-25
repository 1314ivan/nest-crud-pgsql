const isNotEmpty = (name: string) => `Поле ${name} не должно быть пустым`
const isType = (name: string, type: string) => `Поле ${name} должно быть ${type}`
const minLength = (name: string, length: number) => `Поле ${name} не должно быть меньше ${length} символов`
const maxLength = (name: string, length: number) => `Поле ${name} не должно быть больше ${length} символов`
export { isNotEmpty, isType, minLength, maxLength }