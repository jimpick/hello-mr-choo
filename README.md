# hello-mr-choo
Experiment using montage require with a Dat to use npm modules without bundling ahead of time

# To run the example

The node_modules directory is checked in already.

`dat share`

View in Beaker Browser, eg.

`dat://ca83049a5ada462a077e1ff44996cb787424ac844f15c2ace1b6f2a320969068/`

If you look in the network view of Developer Tools, you should see that the individual .js files are being fetched
at runtime (instead of using a browserified bundle).

