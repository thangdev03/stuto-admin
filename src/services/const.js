export const createPieData = (lists) => {
    const total = lists.length;
    let firstFourPortion = 0;
    let pieData = [];
    const colorValue = ["hsl(347, 70%, 50%)", "hsl(203, 70%, 50%)", "hsl(337, 70%, 50%)", "hsl(147, 70%, 50%)", "hsl(290, 70%, 50%)"]

    lists.slice(0,4).forEach((item, index) => {
        const itemPortion = parseFloat((item.referenceCount / total * 100).toFixed(2));
        firstFourPortion += itemPortion;
        const data = {
            "id": item.name,
            "label": item.name,
            "value": itemPortion,
            "color": colorValue[index]
        }
        pieData.push(data)
    })
    
    const otherItemsData = {
        "id": "Các ngành khác",
        "label": "Các ngành khác",
        "value": 100 - firstFourPortion,
        "color": colorValue[4]
    }
    pieData.push(otherItemsData)

    return pieData;
}

export const createLineData = () => {

}

export const mockBarData = [
    {
      "id": "japan",
      "color": "hsl(266, 70%, 50%)",
      "data": [
        {
          "x": "Thứ hai",
          "y": 294
        },
        {
          "x": "helicopter",
          "y": 227
        },
        {
          "x": "boat",
          "y": 157
        },
        {
          "x": "train",
          "y": 171
        },
        {
          "x": "subway",
          "y": 208
        },
        {
          "x": "bus",
          "y": 96
        },
        {
          "x": "car",
          "y": 115
        },
        {
          "x": "moto",
          "y": 12
        },
        {
          "x": "bicycle",
          "y": 189
        },
        {
          "x": "horse",
          "y": 210
        },
        {
          "x": "skateboard",
          "y": 70
        },
        {
          "x": "others",
          "y": 127
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(238, 70%, 50%)",
      "data": [
        {
          "x": "Thứ hai",
          "y": 4
        },
        {
          "x": "helicopter",
          "y": 142
        },
        {
          "x": "boat",
          "y": 206
        },
        {
          "x": "train",
          "y": 60
        },
        {
          "x": "subway",
          "y": 211
        },
        {
          "x": "bus",
          "y": 223
        },
        {
          "x": "car",
          "y": 190
        },
        {
          "x": "moto",
          "y": 4
        },
        {
          "x": "bicycle",
          "y": 210
        },
        {
          "x": "horse",
          "y": 118
        },
        {
          "x": "skateboard",
          "y": 134
        },
        {
          "x": "others",
          "y": 42
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(284, 70%, 50%)",
      "data": [
        {
          "x": "Thứ hai",
          "y": 78
        },
        {
          "x": "helicopter",
          "y": 261
        },
        {
          "x": "boat",
          "y": 150
        },
        {
          "x": "train",
          "y": 212
        },
        {
          "x": "subway",
          "y": 4
        },
        {
          "x": "bus",
          "y": 15
        },
        {
          "x": "car",
          "y": 138
        },
        {
          "x": "moto",
          "y": 184
        },
        {
          "x": "bicycle",
          "y": 168
        },
        {
          "x": "horse",
          "y": 97
        },
        {
          "x": "skateboard",
          "y": 146
        },
        {
          "x": "others",
          "y": 138
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(81, 70%, 50%)",
      "data": [
        {
          "x": "Thứ hai",
          "y": 274
        },
        {
          "x": "helicopter",
          "y": 231
        },
        {
          "x": "boat",
          "y": 190
        },
        {
          "x": "train",
          "y": 188
        },
        {
          "x": "subway",
          "y": 96
        },
        {
          "x": "bus",
          "y": 214
        },
        {
          "x": "car",
          "y": 151
        },
        {
          "x": "moto",
          "y": 210
        },
        {
          "x": "bicycle",
          "y": 121
        },
        {
          "x": "horse",
          "y": 233
        },
        {
          "x": "skateboard",
          "y": 297
        },
        {
          "x": "others",
          "y": 72
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(85, 70%, 50%)",
      "data": [
        {
          "x": "Thứ hai",
          "y": 263
        },
        {
          "x": "helicopter",
          "y": 103
        },
        {
          "x": "boat",
          "y": 34
        },
        {
          "x": "train",
          "y": 163
        },
        {
          "x": "subway",
          "y": 197
        },
        {
          "x": "bus",
          "y": 60
        },
        {
          "x": "car",
          "y": 1
        },
        {
          "x": "moto",
          "y": 293
        },
        {
          "x": "bicycle",
          "y": 147
        },
        {
          "x": "horse",
          "y": 200
        },
        {
          "x": "skateboard",
          "y": 280
        },
        {
          "x": "others",
          "y": 9
        }
      ]
    }
]