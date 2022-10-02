
import sys
import os
DIRNAME = os.path.dirname(__file__)
sys.path.append(DIRNAME)

from primes import primes as fast, primes_alternate_ways as alternate


__all__ = ["fast", "alternate"]

