mask DW 0xFFFF
one DW 0x0001

read  LD R1, 0xFF
      BZ R1, check
      ADD R2, R2, R1
      BZ R0, read


check BP R2, write
      LD R3, mask
      XOR R2, R2, R3
      LD R3, one
      ADD R2, R2, R3

write ST R2, 0xFF
