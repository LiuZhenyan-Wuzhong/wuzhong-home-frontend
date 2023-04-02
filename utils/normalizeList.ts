export default function normalizeList<T>(objList: T[], key?: string) {
    const objMap: { [key: string]: T } = {};
    objList.map((obj, idx) => (objMap[key ? (obj as any)[key] : idx] = obj));
    return objMap;
}
