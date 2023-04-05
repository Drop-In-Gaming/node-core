

export default function parseEnumKeyValues (myEnum) : string[] {
    return Object.values(myEnum).filter(value => typeof value === 'string') as string[];
}