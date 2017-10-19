Failing on OSX.

You need yarn as a global to install. Tested against node 7.10.1, on OSX 10.13

- `yarn install`
- `node index.js`

Sample output (with ^ logs in the system_uri crate (as in the included `ffi.rs`)):

```
0x105150f91 lalalallalaa.
0x105150f91 parsed FIRSTTTT???
"/dev/null" parsed uriiii???
0x105150f91 lalalallalaa.
0x105150f91 parsed FIRSTTTT???
"/dev/null" parsed uriiii???
0x105150f91 lalalallalaa.
0x105150f91 parsed FIRSTTTT???
"/dev/null" parsed uriiii???
0x105150f91 lalalallalaa.
0x105150f91 parsed FIRSTTTT???
"/dev/null" parsed uriiii???
0x105150f91 lalalallalaa.
0x105150f91 parsed FIRSTTTT???
"/dev/null" parsed uriiii???
[1]    80819 segmentation fault  node index.js
```
