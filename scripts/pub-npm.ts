import { build, npmPublish } from './common'

await build()
await npmPublish()
await Bun.$`git push origin --follow-tags`
