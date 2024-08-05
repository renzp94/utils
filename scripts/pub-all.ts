import { build, jsrPublish, npmPublish } from './common'

await build()
await npmPublish()
await jsrPublish()
await Bun.$`git push origin --follow-tags`
