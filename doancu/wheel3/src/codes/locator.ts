import type { Matcher } from '@codemod/matchers'

export type Locator<T> = {
  matcher: Matcher<T>
}
