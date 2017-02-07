* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* stdmap.gs
* 
* This script creates Precipitation's maps for each seasons 
*
* Written by L.Mariotti, May 2011
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* set variables 

varName='tas'
month='1'
ifile='tas_Amon_GFDL-ESM2M_historical_r1i1p1_2005.timmean.nc'
factor='1'

* to plot
  'c'
  'set gxout grfill'
  'set grads off'
  'set grid off'
  'set mpdset hires'
  'set map 1 1 8'
  'set xlopts 1 4 0.15'
  'set ylopts 1 4 0.15'
  'set clopts -1 -1 0.16'
  'sdfopen 'ifile''
  'set lon 3 100'
  'set lat -37 -3'

  'define mean1='varName'(t='month')-273.5'

  'set clevs 16 18 20 22 24 26 28 30 '
*  'set ccols 4 11 5 13 3 10 7 12 8 2 '
  
  'd mean1'

  'draw title annual mean surface temperature in 2005 (degree C)'
  'run cbarn.gs'

  'enable print map.'varName'.'month'.gmf'
  'print'
  'disable print'
  '!gxeps -c -i map.'varName'.'month'.gmf -o map.'varName'.'month'.eps'
 
quit
