---
name: bookmark-manager
description: Manages boxes and bookmarks for the bookmark-box project
---

## What I do

- Create new boxes (categories) of bookmarks
- Add bookmarks to existing or new boxes
- Maintain the structure and format of `src\data\boxes.ts`

## When to use me

Use this skill when the user asks for:

- "create a box", "new category", "create box for X"
- "add bookmark", "add link", "new link", "add to box"

## How to do it

### Always read first

**BEFORE making any changes**, read `src\data\boxes.ts` to understand:

- The exact structure of each box
- The names of existing boxes
- The bookmark format

### Box structure

```typescript
export const boxName = {
  title: 'Box Title',
  bookmarks: [
    { title: 'Bookmark name', url: 'https://...' },
    { title: 'Another', url: 'https://...', selectIds: ['1'] },
  ],
}
```

### To add a bookmark to an existing box

1. Find the appropriate box in `src\data\boxes.ts`
2. Add the new bookmark to the `bookmarks` array
3. Keep the format: `{ title: '...', url: '...' }`
4. If the user specifies `selectIds`, add them: `{ title: '...', url: '...', selectIds: ['1'] }`

### To create a new box

1. Create a new exported object with the structure shown above
2. Add the variable name to the `boxes` array at the end of the file
3. Variable name should be camelCase (e.g., `myNewBox`)

### Rules

- **DO NOT** validate URLs
- If there's already a box where the bookmark fits better, use that instead of creating a new one
- Keep the same format and style as the existing file
- Bookmarks are ordered as they appear in the list

## Examples

### Example 1: Add bookmark to existing box

User: "Add https://example.com to the AI box"

Action:

1. Read `src\data\boxes.ts`
2. Find `AIBox`
3. Add `{ title: 'Example', url: 'https://example.com' }` to `AIBox.bookmarks`

### Example 2: Create a new box

User: "Create a music box with Spotify and YouTube Music"

Action:

1. Read `src\data\boxes.ts`
2. Create:
   ```typescript
   export const musicStreamingBox = {
     title: 'Music Streaming',
     bookmarks: [
       { title: 'Spotify', url: 'https://spotify.com' },
       { title: 'YouTube Music', url: 'https://music.youtube.com' },
     ],
   }
   ```
3. Add `musicStreamingBox` to the `boxes` array
