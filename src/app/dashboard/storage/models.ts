export interface StorageFile {
    id: number
    name: string
    mime_type: string
    size: number
    hash: string
    public: boolean
    parent: number | null
    created_at: string
}

export interface StorageFolder {
    id: number
    name: string
    public: boolean
    parent: number | null
    created_at: string
}
