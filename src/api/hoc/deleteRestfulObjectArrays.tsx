import DigApi, {iBootstrapState, iRestfulObjectArrayTypes, tRestfulObjectValues} from "DigApi";


//ObjectType, UniqueIdType extends keyof ObjectType
export default function deleteRestfulObjectArrays<ObjectType extends tRestfulObjectValues>
(dataOrCallback: ((prev: Readonly<iBootstrapState>) => ObjectType[]) | ObjectType[],
uniqueObjectId: keyof ObjectType,
stateKey: keyof iRestfulObjectArrayTypes,
callback?: () => void): void {

    return DigApi.bootstrap.setState((previousBootstrapState): {} => {

        let newOrReplacementData: ObjectType[] = dataOrCallback instanceof Function ? dataOrCallback(previousBootstrapState) : dataOrCallback;

        const previousStateProperty = previousBootstrapState[stateKey] as ObjectType[];

        return {
            [stateKey]: null === previousBootstrapState ? null : [
                ...previousStateProperty?.filter(item => false === (newOrReplacementData?.find(value => value[uniqueObjectId] === item[uniqueObjectId]) || false)) || []
            ] as ObjectType[]
        }
    }, callback);

}

